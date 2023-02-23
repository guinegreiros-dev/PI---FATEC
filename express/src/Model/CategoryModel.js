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


    /**
     * edit a existent supplier in Database
     * 
     * @param {*} idSupplier
     * @param {*} NOME_FORNE 
     * @param {*} CNPJ_FORNE 
     * @param {*} CPF_FORNE 
     * @param {*} CEP_FORNE 
     * @param {*} END_FORNE 
     * @param {*} NUM_END_FORNE 
     * @param {*} TELE_FORNE 
     * @param {*} UF_FORNE 
     * @returns 
     */
    async editSupplier(idSupplier, NOME_FORNE, CNPJ_FORNE, CPF_FORNE, CEP_FORNE, END_FORNE, NUM_END_FORNE, TELE_FORNE, UF_FORNE) {

        const
            execute = await mysql;

        let [rows] = await execute.query(`
            UPDATE tb_fornecedores SET 
            NOME_FORNE = ?, 
            CNPJ_FORNE = ?, 
            CPF_FORNE = ?, 
            CEP_FORNE = ?, 
            END_FORNE = ?, 
            NUM_END_FORNE = ?, 
            TELE_FORNE = ?, 
            UF_FORNE = ? 
            WHERE (ID_FORNE = ?);
            `,
            [NOME_FORNE, CNPJ_FORNE, CPF_FORNE, CEP_FORNE, END_FORNE, NUM_END_FORNE, TELE_FORNE, UF_FORNE, idSupplier]);

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

    async disableCategory(categorId) {

        const
            execute = await mysql;

        let [rows] = await execute.query(`UPDATE tb_categorias SET status = 0 WHERE (ID_FORNE = ?);`, [categorId]);

        return rows
    }

    async enableSupplier(supplierId) {

        const
            execute = await mysql;

        let [rows] = await execute.query(`UPDATE tb_fornecedores SET status = 1 WHERE (ID_FORNE = ?);`, [supplierId]);

        return rows
    }

    async specific(supplierId) {

        const
            execute = await mysql;

        let [rows] = await execute.query(`SELECT NOME_FORNE, CNPJ_FORNE, CPF_FORNE, CEP_FORNE, END_FORNE, NUM_END_FORNE, TELE_FORNE, UF_FORNE FROM tb_fornecedores WHERE ID_FORNE = ?`, [supplierId]);

        return rows
    }

} module.exports = Supplier;