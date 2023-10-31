const
    StockModel = require('../Model/MovementStockModel'),
    orderModel = require('../Model/OrderModel'),
    Helper = require('../Helper'),
    moment = require('moment-timezone');


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

            if (orderExist) return Helper.message("error", "generic");

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

            if (!element.DAT_FABR) {
                element.DAT_FABR = "-";
            } else {
                element.DAT_FABR = new Date(element.DAT_FABR).toLocaleDateString("pt-br");
            }

            if (!element.DAT_VALI) {
                element.DAT_VALI = "-";
            } else {
                element.DAT_VALI = new Date(element.DAT_VALI).toLocaleDateString("pt-br");
            }

            if (element.TIPO_MOV === 1) element.TIPO_MOV = "Entrada";

        });

        return result
    }

    async exitStock(req) {

        try {

            let {
                stockId,
                amount,
                userId
            } = req.body;

            const updateAmount = await this.exit(stockId, amount);

            if (updateAmount.affectedRows !== 1) return Helper.message("error", "generic");

            const test = await this.exitLog(stockId, amount, userId);

            if (test.affectedRows !== 1) return Helper.message("error", "generic");

            return Helper.message("stock", "exit");

        } catch (error) {
            console.log(error);
            return Helper.message("error", "generic");
        }
    }

    async listLogSpecficId(req) {

        try {

            let {
                stockId,
            } = req.params;

            const updateAmount = await this.listLog(stockId);

            let result = [];

            updateAmount.forEach(element => {

                const
                    dataUTC = new Date(element.date),
                    dataLocal = dataUTC.toLocaleString();

                result.push({ response: `O usuário ${element.userName} retirou ${element.amount} unidades - ${dataLocal}` })
            });

            return result;

        } catch (error) {
            console.log(error);
            return Helper.message("error", "generic");
        }
    }

    async alertMain() {

        try {

            let
                infos = await this.alertMininunDate(),
                result = [];

            infos.forEach(element => {

                const dataAtual = new Date();

                if (element.DAT_VALI) {

                    let dateMinimun = new Date(element.DAT_VALI)

                    dateMinimun.setDate(dateMinimun.getDate() - element.DIAS_AVISO);

                    if(dataAtual >= dateMinimun){
                        let message;

                        if(element.DAT_VALI < dataAtual) {
                            message = { response: `O produto ${element.DESC_PROD} do pedido ${element.orderId} está vencido.` };
                        } else {
                            message = { response: `O produto ${element.DESC_PROD} do pedido ${element.orderId} está próximo do vencimento.` };
                        }

                        result.push(message); 
                    }
                };

                if (element.QTD_MOV <= element.QUANT_MINIMA) {

                    let message = { response: `O produto ${element.DESC_PROD} do pedido ${element.orderId} está com baixa quantidade no estoque.` };

                    result.push(message);
                }

            });

            return result;

        } catch (error) {
            console.log(error);
            return Helper.message("error", "generic");
        }
    }

} module.exports = Stock;



