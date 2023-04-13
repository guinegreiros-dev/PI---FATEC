const
    orderModel = require('../Model/OrderModel'),
    Helper = require('../Helper');

class Order extends orderModel {

    async create(req) {

        try {

            let {
                objOrder
            } = req.body;

            let orderCreated = await super.create(objOrder.supplier);

            for (const element of objOrder.produtos) {

                let [productId] = await super.productIdByName(element.nome);

                productId = Object.values(productId);

                await super.insertOrderProduct(orderCreated.insertId, productId[0], element.quantidade);
            }

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
                listOrder = await super.listOrder();

            listOrder.forEach(element => {

                element.DAT_PED = new Date(element.DAT_PED).toLocaleDateString("pt-br");


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

            return listOrder;

        } catch (error) {

            console.log(error);
            return Helper.message("error", "generic");
        }
    }

    async disable(req) {

        try {

            let { orderId } = req.params

            await super.disable(orderId);

            return Helper.message("order", "disable");

        } catch (error) {
            console.log(error);
            return Helper.message("error", "generic");
        }
    }

    async enable(req) {
        try {

            let { orderId } = req.params

            await super.enable(orderId);

            return Helper.message("order", "enable");

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

    async listProductByOrder(req) {
        try {

            let
                { orderId } = req.params,
                result = await super.productsByOrder(orderId);

            return result;

        } catch (error) {
            console.log(error);
            return Helper.message("error", "generic");
        }
    }

} module.exports = Order;



