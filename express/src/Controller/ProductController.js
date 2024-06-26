const
    ProductModel = require('../Model/ProductModel'),
    Helper = require('../Helper');

class Product extends ProductModel {

    /**
     * Add a new product
     * 
     * @param {*} req 
     * @returns 
     */
    async create(req) {

        try {

            let {
                descProd,
                codBarra,
                categoryId
            } = req.body;

            await super.newProduct(descProd, codBarra, categoryId);

            return Helper.message("product", "created");

        } catch (error) {
            console.log(error);
            return Helper.message("error", "generic");
        }
    }

    async edit(req) {
        try {

            let {
                descProd,
                codBarra,
                categoryId,
                prodId
            } = req.body;

            await super.editSupplier(descProd, codBarra, categoryId, prodId);

            return Helper.message("product", "edited");

        } catch (error) {

            console.log(error);
            return Helper.message("error", "generic");
        }
    }

    async list() {
        try {

            const
                listProducts = await super.selectAllProducts();

            listProducts.forEach(element => {

                switch (element.status) {
                    case 1:
                        element.status = "ativo";
                        break;
                    case 0:
                        element.status = "inativo";
                        break;
                    default:
                        break;
                }
            });

            return listProducts;

        } catch (error) {

            console.log(error);
            return Helper.message("error", "generic");
        }
    }

    async disable(req) {

        try {

            let { productId } = req.params

            await super.disable(productId);

            return Helper.message("product", "disable");

        } catch (error) {
            console.log(error);
            return Helper.message("error", "generic");
        }
    }

    async enable(req) {
        try {

            let { productId } = req.params

            await super.enable(productId);

            return Helper.message("product", "enable");

        } catch (error) {

            console.log(error);
            return Helper.message("error", "generic");
        }

    }

    async specific(req) {
        try {

            let
                { productId } = req.params,
                [result] = await super.specific(productId);

            return result;

        } catch (error) {
            console.log(error);
            return Helper.message("error", "generic");
        }
    }

} module.exports = Product;



