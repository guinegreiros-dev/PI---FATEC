const
    SupplierModel = require('../Model/CategoryModel'),
    Helper = require('../Helper');

class Supplier extends SupplierModel {

    /**
     * Add a new Supplier
     * 
     * @param {*} req 
     * @returns 
     */
    async create(req) {

        try {

            let {
                NOME_CATEGORIA,
                TEM_VAL,
                DIAS_AVISO,
                QUANT_MINIMA
            } = req.body;

            if (!DIAS_AVISO) DIAS_AVISO = '0';
            if (!QUANT_MINIMA) QUANT_MINIMA = '0';


            await super.newCategory(NOME_CATEGORIA, TEM_VAL, DIAS_AVISO, QUANT_MINIMA);

            return Helper.message("category", "created");

        } catch (error) {
            console.log(error);
            return Helper.message("error", "generic");
        }
    }

    async edit(req) {
        try {

            let {
                nameCategory,
                hasValidity,
                daysWarning,
                minimumAmount,
                categoryId
            } = req.body;

            await super.edit(nameCategory, hasValidity, daysWarning, minimumAmount, categoryId);

            return Helper.message("category", "edited");

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

            if (element.status === 1) element.status = "ativo";
            if (element.status === 0) element.status = "inativo";
        });

        return result
    }

    async disable(req) {

        let { categoryId } = req.params

        await super.disable(categoryId);

        return Helper.message("category", "disable");
    }

    async enable(req) {

        let { categoryId } = req.params

        await super.enable(categoryId);

        return Helper.message("category", "enable");
    }

    async specific(req) {

        try {
            let { categoryId } = req.params,

                [result] = await super.specific(categoryId);

            return result

        } catch (error) {
            console.log(error);
            return Helper.message("error", "generic");

        }

    }

} module.exports = Supplier;



