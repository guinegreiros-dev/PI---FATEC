const 
    ProductModel = require('../Model/ProductModel'),
    Helper = require('../Helper');

class Product extends ProductModel{

    /**
     * Add a new product
     * 
     * @param {*} req 
     * @returns 
     */
    async create(req){

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

    async editSupplier(req){
        try {

            let  {
                idSupplier,
                nameSupplier,
                cnpjSupplier,
                cpfSupplier,
                cepSupplier,
                endSupplier,
                numEndSupplier,
                TeleSupplier,
                ufSupplier
               } = req.body;
    
               await super.editSupplier(idSupplier, nameSupplier, cnpjSupplier, cpfSupplier, cepSupplier, endSupplier, numEndSupplier, TeleSupplier, ufSupplier);
    
               
               return Helper.message("supplier", "edited");
            
        } catch (error) {

            console.log(error);
            return Helper.message("error", "generic");
        }
    }

    async list() {

        let listProducts = await super.selectAllProducts();

        // listProducts.forEach(element => {

        //     element.data_valid = new Date(element.data_valid).toLocaleDateString("pt-br");
            
        // });

        return listProducts
    }

    async disable(req) {

        let { supplierId } = req.params

        await super.disableSupplier(supplierId);

        return Helper.message("supplier", "disable");
    }

    async enable(req) {

        let { supplierId } = req.params

        await super.enableSupplier(supplierId);

        return Helper.message("supplier", "enable");
    }

    async specific(req) {

        let { supplierId } = req.params,

        [result] = await super.specific(supplierId);
        
        return result
    }
    
}module.exports = Product;



