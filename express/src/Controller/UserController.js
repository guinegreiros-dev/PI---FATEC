const UserModel = require('../Model/UserModel');

const UserM = new UserModel()

class User {

    async login(req){
        try {

            let {
                loginUser,
                passwordUser,
            } = req.body;

            const [login] = await UserM.login(loginUser, passwordUser);

            if(!login) return "Falha no login."

            return "Usuário logado."
            
        } catch (error) {

            return "Erro no login."
        }
    }

    async getAllUsers() {

        return await UserM.allUsers();
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