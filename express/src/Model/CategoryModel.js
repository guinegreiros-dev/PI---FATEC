const
    mysql = require('../../connection');

class Supplier {

    /**
     * 
     * @param {*} DESC_PROD 
     * @param {*} COD_BARRA 
     * @param {*} FK_TB_CATEGORIAS_ID_CATEGORIA 
     * @param {*} data_valid 
     * @param {*} amount 
     * @returns 
     */
    async newCategory(NOME_CATEGORIA, TEM_VAL, DIAS_AVISO, QUANT_MINIMA) {

        const
            execute = await mysql;

        let [rows] = await execute.query(`

        INSERT INTO tb_categorias (NOME_CATEGORIA, TEM_VAL, DIAS_AVISO, QUANT_MINIMA) VALUES (?, ?, ?, ?);
        `,
            [NOME_CATEGORIA, TEM_VAL, DIAS_AVISO, QUANT_MINIMA]);

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

    async selectAllCategories() {

        const
            execute = await mysql;

        let [rows] = await execute.query(`
        SELECT
        ID_CATEGORIA,
        NOME_CATEGORIA,
        CASE
            WHEN TEM_VAL = 1 THEN 'sim'
            WHEN TEM_VAL = 0 THEN 'não'
        END
        TEM_VAL,
        DIAS_AVISO,
        QUANT_MINIMA,
        status
        FROM gestao_estoque.tb_categorias 
        ORDER BY ID_CATEGORIA DESC
        `);

        return rows
    }

    async disable(categorId) {

        const
            execute = await mysql;

        let [rows] = await execute.query(`UPDATE tb_categorias SET status = 0 WHERE (ID_CATEGORIA = ?);`, [categorId]);

        return rows
    }

    async enable(categoryId) {

        const
            execute = await mysql;

        let [rows] = await execute.query(`UPDATE tb_categorias SET status = 1 WHERE (ID_CATEGORIA  = ?);`, [categoryId]);

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

} module.exports = Supplier;