const 
    SupplierModel = require('../Model/SupplierModel'),
    Helper = require('../Helper');

class Supplier extends SupplierModel{

    /**
     * Add a new Supplier
     * 
     * @param {*} req 
     * @returns 
     */
    async addSupplier(req){

        try {

            let {
                nameSupplier,
                cnpjSupplier,
                cpfSupplier,
                cepSupplier,
                endSupplier,
                numEndSupplier,
                TeleSupplier,
                ufSupplier
               } = req.body;
               
            await super.newSupplier(nameSupplier, cnpjSupplier, cpfSupplier, cepSupplier, endSupplier, numEndSupplier, TeleSupplier, ufSupplier);
    
            return Helper.message("supplier", "created");
            
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

        return super.selectAllSuppliers();
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
    
}module.exports = Supplier;



