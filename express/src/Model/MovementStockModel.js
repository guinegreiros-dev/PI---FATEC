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
        WHERE QTD_MOV > 0
        ORDER BY ID_ESTOQUE_MOV DESC
        `);

        return rows
    }

    async exit(ID_ESTOQUE_MOV, newAmount) {

        try {

            const execute = await mysql;

            let [rows] = await execute.query(`
            UPDATE 
                tb_estoques_mov 
            SET 
                QTD_MOV = QTD_MOV - ? 
                WHERE (ID_ESTOQUE_MOV = ?);
    
            `,
                [newAmount, ID_ESTOQUE_MOV]);

            return rows

        } catch (error) {
            console.log(error)
            return "Error"
        }
    }

    async exitLog(orderId, amount, userId) {

        try {

            const execute = await mysql;

            let [rows] = await execute.query(`
            INSERT INTO 
                log_stock 
                (amount, userId, orderId) 
            VALUES 
                (?, ?, ?);
            `,
                [amount, userId, orderId]);

            return rows

        } catch (error) {
            console.log(error)
            return "Error"
        }
    }

    async listLog(stockId) {

        try {

            const execute = await mysql;

            let [rows] = await execute.query(`
            SELECT 
                orderId AS stockId, 
                NOME_USER AS userName, 
                amount,  date  
            FROM 
                log_stock AS ls 
            INNER JOIN 
                tb_usuarios AS u 
            ON 
                u.ID_USER = ls.userId
            WHERE
                orderId = ?
            `,
                [stockId]);

            return rows

        } catch (error) {
            console.log(error)
            return "Error"
        }
    }

    async alertMininunDate() {

        try {

            const execute = await mysql;

            let [rows] = await execute.query(`
                SELECT 
                    orderId,
                    DESC_PROD,
                    NOME_CATEGORIA,
                    QTD_MOV,
                    QUANT_MINIMA,
                    DIAS_AVISO,
                    DAT_VALI
                FROM 
                    tb_estoques_mov
                INNER JOIN tb_usuarios ON tb_usuarios.ID_USER = tb_estoques_mov.userId
                INNER JOIN tb_pedidos ON tb_pedidos.ID_PED = tb_estoques_mov.orderId
                INNER JOIN tb_produtos ON tb_produtos.ID_PROD = tb_estoques_mov.productId
                INNER JOIN tb_categorias ON tb_categorias.ID_CATEGORIA = tb_produtos.FK_TB_CATEGORIAS_ID_CATEGORIA
            `);

            return rows

        } catch (error) {
            console.log(error)
            return "Error"
        }
    }


} module.exports = Stock;