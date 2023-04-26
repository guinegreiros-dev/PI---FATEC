const
    mysql = require('../../connection');

class Stock {

    async entry(QTD_MOV, DAT_FABR, DAT_VALI, NF_E, userId, orderId, productId) {

        const
            execute = await mysql;

        let [rows] = await execute.query(`
        INSERT INTO 
            tb_estoques_mov 
        (
            TIPO_MOV, 
            QTD_MOV, 
            DAT_FABR, 
            DAT_VALI, 
            NF_E, 
            userId, 
            orderId, 
            productId
        ) 
        VALUES 
        (
            1, 
            ?, 
            ?, 
            ?, 
            ?, 
            ?, 
            ?, 
            ?
        );
        `,
            [QTD_MOV, DAT_FABR, DAT_VALI, NF_E, userId, orderId, productId]);

        return rows
    }

    async orderExist(orderId) {

        const
            execute = await mysql;

        let [rows] = await execute.query(`
        SELECT 
            * 
        FROM 
            tb_estoques_mov 
        WHERE 
            orderId = ?
        `,
            [orderId]);

        return rows
    }

    async listStock() {

        const
            execute = await mysql;

        let [rows] = await execute.query(`
        SELECT 
            tb_estoques_mov.ID_ESTOQUE_MOV AS stockId,
            DAT_MOV,
            TIPO_MOV,
            QTD_MOV,
            NF_E,
            DAT_FABR,
            DAT_VALI,
            NOME_USER,
            ID_PED,
            DESC_PROD
        FROM 
            tb_estoques_mov
        INNER JOIN tb_usuarios ON tb_usuarios.ID_USER = tb_estoques_mov.userId
        INNER JOIN tb_pedidos ON tb_pedidos.ID_PED = tb_estoques_mov.orderId
        INNER JOIN tb_produtos ON tb_produtos.ID_PROD = tb_estoques_mov.productId
        `);

        return rows
    }




} module.exports = Stock;