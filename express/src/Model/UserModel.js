class User{

    
    async login(loginUser, passwordUser){

        const mysql = await require('../../connection');

        let [rows] =  await mysql.query("SELECT * FROM tb_usuarios WHERE login_user = ? AND senha_user = ?", [loginUser, passwordUser]);

        return rows
    }

     async allUsers(){

        const mysql = await require('../../connection');

        let [rows] =  await mysql.query(`
        SELECT 
        id_user, nome_user, nome_tipo_user, status
        FROM tb_usuarios 
        INNER JOIN tb_tipo_usuarios ON tb_tipo_usuarios.ID_TIPO_USER = tb_usuarios.FK_TB_TIPO_USUARIOS_ID_TIPO_USER
        ORDER BY id_user DESC
        `);

        return rows
    }

    async newUser(loginUser, nomeUser, passwordUser, typeUserId){

        const mysql = await require('../../connection');

        let [rows] =  await mysql.query("INSERT INTO tb_usuarios (`LOGIN_USER`, `NOME_USER`, `SENHA_USER`, `FK_TB_TIPO_USUARIOS_ID_TIPO_USER`) VALUES (?, ?, ?, ?)", [loginUser, nomeUser, passwordUser, typeUserId]);

        return rows
    }

    async updateUser(userId, loginUser, nomeUser, passwordUser, typeUserId){

        const mysql = await require('../../connection');

        let [rows] =  await mysql.query(`
        UPDATE tb_usuarios 
        SET 
        LOGIN_USER = ?, 
        NOME_USER = ?, 
        SENHA_USER = ?, 
        FK_TB_TIPO_USUARIOS_ID_TIPO_USER = ? 
        WHERE (ID_USER = ?);
        `, [loginUser, nomeUser, passwordUser, typeUserId, userId]);

        return rows
    }

    async inactivateUser(userId){

        const mysql = await require('../../connection');

        let [rows] =  await mysql.query(`UPDATE tb_usuarios SET status = '0' WHERE (ID_USER = ?)`, [userId]);

        return rows
    }

    async enableUser(userId){

        const mysql = await require('../../connection');

        let [rows] =  await mysql.query(`UPDATE tb_usuarios SET status = '1' WHERE (ID_USER = ?)`, [userId]);

        return rows
    }

    async specific(userId){

        const mysql = await require('../../connection');

        let [rows] =  await mysql.query(`        
        SELECT 
        id_user, login_user, nome_user, id_tipo_user, nome_tipo_user, senha_user
        FROM tb_usuarios 
        INNER JOIN tb_tipo_usuarios ON tb_tipo_usuarios.ID_TIPO_USER = tb_usuarios.FK_TB_TIPO_USUARIOS_ID_TIPO_USER
        WHERE id_user = ?
		ORDER BY id_user DESC`, [userId]);

        return rows
    }

    
} module.exports = User;