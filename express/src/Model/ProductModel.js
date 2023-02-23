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
    async newProduct(DESC_PROD, COD_BARRA, FK_TB_CATEGORIAS_ID_CATEGORIA) {

        const
            execute = await mysql;

        let [rows] = await execute.query(`INSERT INTO tb_produtos (DESC_PROD, COD_BARRA, FK_TB_CATEGORIAS_ID_CATEGORIA) VALUES (?, ?, ?);`,
            [DESC_PROD, COD_BARRA, FK_TB_CATEGORIAS_ID_CATEGORIA]);

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

    async selectAllProducts() {

        const
            execute = await mysql;

        let [rows] = await execute.query(`SELECT ID_PROD, DESC_PROD, COD_BARRA, NOME_CATEGORIA FROM tb_produtos INNER JOIN tb_categorias ON tb_categorias.ID_CATEGORIA = tb_produtos.FK_TB_CATEGORIAS_ID_CATEGORIA ORDER BY ID_PROD DESC`);

        return rows
    }

    async disableSupplier(supplierId) {

        const
            execute = await mysql;

        let [rows] = await execute.query(`UPDATE tb_fornecedores SET status = 0 WHERE (ID_FORNE = ?);`, [supplierId]);

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