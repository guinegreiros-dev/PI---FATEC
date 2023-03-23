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
    async editSupplier(descProd, codBarra, categoryId, prodId) {

        const
            execute = await mysql;

        let [rows] = await execute.query(`
        UPDATE 
            tb_produtos 
        SET 
            DESC_PROD = ?, 
            COD_BARRA = ?, 
            FK_TB_CATEGORIAS_ID_CATEGORIA = ? 
        WHERE (ID_PROD = ?);
            `,
            [descProd, codBarra, categoryId, prodId]);

        return rows
    }

    async selectAllProducts() {

        const
            execute = await mysql;

        let [rows] = await execute.query(`
        SELECT 
            ID_PROD, 
            DESC_PROD, 
            COD_BARRA, 
            NOME_CATEGORIA,
            tb_produtos.status
        FROM 
            tb_produtos 
        INNER JOIN 
            tb_categorias ON tb_categorias.ID_CATEGORIA = tb_produtos.FK_TB_CATEGORIAS_ID_CATEGORIA 
        ORDER BY 
            ID_PROD DESC`);

        return rows
    }

    async disable(productId) {

        const
            execute = await mysql;

        let [rows] = await execute.query(`UPDATE tb_produtos SET status = 0 WHERE (ID_PROD = ?);`, [productId]);

        return rows
    }

    async enable(productId) {

        const
            execute = await mysql;

        let [rows] = await execute.query(`UPDATE tb_produtos SET status = 1 WHERE (ID_PROD = ?);`, [productId]);

        return rows
    }

    async specific(productId) {

        const
            execute = await mysql;

        let [rows] = await execute.query(`
        SELECT 
            DESC_PROD, 
            COD_BARRA,
            FK_TB_CATEGORIAS_ID_CATEGORIA AS categoryId
        FROM 
            tb_produtos 
        WHERE 
            ID_PROD = ?`, [productId]);

        return rows
    }

} module.exports = Supplier;