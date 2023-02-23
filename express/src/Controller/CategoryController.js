const 
    SupplierModel = require('../Model/CategoryModel'),
    Helper = require('../Helper');

class Supplier extends SupplierModel{

    /**
     * Add a new Supplier
     * 
     * @param {*} req 
     * @returns 
     */
    async create(req){

        try {

            let {
                NOME_CATEGORIA, 
                TEM_VAL, 
                DIAS_AVISO, 
                QUANT_MINIMA
               } = req.body;

               if(!DIAS_AVISO) DIAS_AVISO = '0';
               if(!QUANT_MINIMA) QUANT_MINIMA = '0';

               
            await super.newCategory(NOME_CATEGORIA, TEM_VAL, DIAS_AVISO, QUANT_MINIMA);
    
            return Helper.message("category", "created");
            
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

        let result = await super.selectAllCategories();

        result.forEach(element => {

            if (element.DIAS_AVISO === null || element.DIAS_AVISO === 0) element.DIAS_AVISO = "-"
            if (element.QUANT_MINIMA === null || element.QUANT_MINIMA === 0) element.QUANT_MINIMA = "-"

            if(element.status === 1) element.status = "ativo";
            if(element.status === 0) element.status = "inativo";
        });

        return result
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



