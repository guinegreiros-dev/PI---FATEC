const
    orderModel = require('../Model/OrderModel'),
    orderM = new orderModel(),
    Helper = require('../Helper');

class Order extends orderModel {

    async create(req) {

        try {

            let {
                objOrder
            } = req.body;

            let orderCreated = await super.create(objOrder.supplier);

            console.log(orderCreated.insertId)

            for (const element of objOrder.produtos) {


                let [productId] = await super.productIdByName(element.nome)

                productId = Object.values(productId[0])

                
                
            }

            console.log(objOrder);

            

            return Helper.message("order", "created");

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

} module.exports = Order;



