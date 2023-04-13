const
    StockModel = require('../Model/MovementStockModel'),
    orderModel = require('../Model/OrderModel'),
    Helper = require('../Helper');

    const orderM = new orderModel();

class Stock extends StockModel {

    /**
     * Add entry of products
     * 
     * @param {*} req 
     * @returns 
     */
    async entryProduct(req) {

        try {

            let {
                objEntry
            } = req.body;

            objEntry.pedido = parseInt(objEntry.pedido);
            objEntry.notaFiscal = parseInt(objEntry.notaFiscal);


            const [orderExist] = await this.orderExist(objEntry.pedido);

            if(orderExist) return Helper.message("error", "generic");

            for (const product of objEntry.products) {

                const [productId] = await orderM.productIdByName(product.product);

                    if (!product.validate) product.Manufacture = null;
                    if (!product.Manufacture) product.validate = null;

                await this.entry(product.amount, product.Manufacture, product.validate, objEntry.notaFiscal, objEntry.userId, objEntry.pedido, productId.ID_PROD);
            }

            return Helper.message("product", "entry");

        } catch (error) {
            console.log(error);
            return Helper.message("error", "generic");
        }
    }

    async list() {

        let result = await this.listStock();

        result.forEach(element => {

            element.DAT_MOV = new Date(element.DAT_MOV).toLocaleDateString("pt-br");

            if(!element.DAT_FABR){
                element.DAT_FABR = "-";
            }else{
                element.DAT_FABR = new Date(element.DAT_FABR).toLocaleDateString("pt-br");
            }

            if(!element.DAT_VALI){
                element.DAT_VALI = "-";
            }else{
                element.DAT_VALI = new Date(element.DAT_VALI).toLocaleDateString("pt-br");
            }

            if (element.TIPO_MOV === 1) element.TIPO_MOV = "Entrada";

        });

        return result
    }


} module.exports = Stock;



