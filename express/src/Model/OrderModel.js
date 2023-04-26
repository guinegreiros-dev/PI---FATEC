const
    mysql = require('../../connection');

class Order {

    async create(FK_TB_FORNECEDORES_ID_FORNE) {

        const
            execute = await mysql;

        let [rows] = await execute.query(`
        INSERT INTO 
            tb_pedidos(
                FK_TB_FORNECEDORES_ID_FORNE) 
                VALUES (?);
        `,
            [FK_TB_FORNECEDORES_ID_FORNE]);

        return rows
    }

    async productIdByName(productName) {

        const
            execute = await mysql;

        let [rows] = await execute.query(`
        SELECT 
            ID_PROD 
        FROM 
            tb_produtos 
        WHERE 
            DESC_PROD = ?
        `,
            [productName]);

        return rows
    }

    async insertOrderProduct(orderId, productId, amount) {

        const
            execute = await mysql;

        let [rows] = await execute.query(`
        INSERT INTO 
            pedidos_produtos (
                orderId, 
                productId, 
                amount
                ) 
                VALUES (?, ?, ?);

        `,
            [orderId, productId, amount]);

        return rows
    }

    async edit(nameCategory, hasValidity, daysWarning, minimumAmount, categoryId) {

        const
            execute = await mysql;

        let [rows] = await execute.query(`
            UPDATE 
                tb_categorias 
            SET 
                NOME_CATEGORIA = ?,
                TEM_VAL = ?, 
                DIAS_AVISO = ?, 
                QUANT_MINIMA = ? 
            WHERE 
                (ID_CATEGORIA = ?);
            `,
            [nameCategory, hasValidity, daysWarning, minimumAmount, categoryId]);

        return rows
    }

    async listOrder() {

        const
            execute = await mysql;

        let [rows] = await execute.query(`
        SELECT 
            ID_PED, 
            NOME_FORNE, 
            DAT_PED, 
            tb_pedidos.status 
        FROM 
            tb_pedidos 
        INNER JOIN 
            tb_fornecedores ON ID_FORNE = FK_TB_FORNECEDORES_ID_FORNE
        `);
        return rows
    }

    async disable(orderId) {

        const
            execute = await mysql;

        let [rows] = await execute.query(`UPDATE tb_pedidos SET status = 0 WHERE (ID_PED = ?);`, [orderId]);

        return rows
    }

    async enable(orderId) {

        const
            execute = await mysql;

        let [rows] = await execute.query(`UPDATE tb_pedidos SET status = 1 WHERE (ID_PED = ?);`, [orderId]);

        return rows
    }

    async specific(supplierId) {

        const
            execute = await mysql;

        let [rows] = await execute.query(`
        SELECT 
            NOME_CATEGORIA, 
            TEM_VAL, 
            DIAS_AVISO, 
            QUANT_MINIMA 
        FROM 
            tb_categorias
        WHERE
            ID_CATEGORIA = ?
        `, [supplierId]);

        return rows
    }

    async productsByOrder(orderId) {

        const
            execute = await mysql;

        let [rows] = await execute.query(`
        SELECT 
            DESC_PROD,
            amount
        FROM 
            tb_pedidos 
        INNER JOIN 
            tb_fornecedores 
        ON 
            ID_FORNE = FK_TB_FORNECEDORES_ID_FORNE
        INNER JOIN 
            pedidos_produtos 
        ON 
            pedidos_produtos.orderId = tb_pedidos.ID_PED
        INNER JOIN 
            tb_produtos 
        ON 
            tb_produtos.ID_PROD = pedidos_produtos.productId
        WHERE 
            orderId = ?
        `, [orderId]);

        return rows
    }

} module.exports = Order;