const UserModel = require('../Model/UserModel');

const UserM = new UserModel()

const Helper = require('../Helper');

class User {

    async login(req){
        try {

            let {
                loginUser,
                passwordUser,
            } = req.body;

            const [login] = await UserM.login(loginUser, passwordUser);

            if(!login) return "Falha no login."

        
            const test = {

                message: "Usuário logado.",
                userId: login.ID_USER,
                userName: login.NOME_USER,
                userType: login.NOME_TIPO_USER
            }

            return test
            
        } catch (error) {

            return "Erro no login."
        }
    }

    async getAllUsers() {

        try {

            let result = await UserM.allUsers();

            result.forEach(element => {
                
                if(element.status === 1) element.status = "Ativo";
                if(element.status === 0) element.status = "Inativo";
            });
            
            return result
            
        } catch (error) {
            console.log(error);
            Helper.message("error", "generic")
        }

    }

    async getSpecificUsers(req) {

        let {
            userId
        } = req.params,

        [specific] = await UserM.specific(userId);



        return specific
    }

    async postNewUser(req) {

        try {

            let {
                loginUser,
                nomeUser,
                passwordUser,
                typeUserId

            } = req.body;

            let response;

            response = await UserM.newUser(loginUser, nomeUser, passwordUser, typeUserId);

            return "Usuário cadastrado";

        } catch (error) {
            console.log(error);
            return "Algo deu errado.";
        }
    }

    async updateUser(req) {

        try {

            let {
                userId,
                loginUser,
                nomeUser,
                passwordUser,
                typeUserId

            } = req.body;

            let response;

            response = await UserM.updateUser(userId, loginUser, nomeUser, passwordUser, typeUserId);

            return "Usuário atualizado";

        } catch (error) {
            console.log(error);
            return "Algo deu errado.";
        }
    }

    async inativeUser(req) {

        try {

            let {
                userId,
            } = req.params;

            let response;

            response = await UserM.inactivateUser(userId);

            return "Usuário inativado";

        } catch (error) {
            console.log(error);
            return "Algo deu errado.";
        }
    }

    async enableUser(req) {

        try {

            let {
                userId,
            } = req.params;

            let response;

            response = await UserM.enableUser(userId);

            return "Usuário ativado";

        } catch (error) {
            console.log(error);
            return "Algo deu errado.";
        }
    }

} module.exports = User;