const Supplier = require("./Model/SupplierModel");

class Helper {

    message(type, reason) {

        let result;

        switch (type) {
            case "supplier":
                switch (reason) {

                    case "created": result = "Fornecedor cadastrado com sucesso."; break;

                    case "edited": result = "Fornecedor editado com sucesso."; break;

                    case "disable": result = "Fornecedor desativado com sucesso."; break;

                    case "enable": result = "Fornecedor ativado com sucesso."; break;
                }
                break;

                case "product":
                    switch (reason) {
    
                        case "created": result = "Produto cadastrado com sucesso."; break;
    
                        case "edited": result = "Fornecedor editado com sucesso."; break;
    
                        case "disable": result = "Fornecedor desativado com sucesso."; break;
    
                        case "enable": result = "Fornecedor ativado com sucesso."; break;
                    }
                    break;

                    case "category":
                        switch (reason) {
        
                            case "created": result = "Categoria cadastrado com sucesso."; break;
        
                            case "edited": result = "Fornecedor editado com sucesso."; break;
        
                            case "disable": result = "Fornecedor desativado com sucesso."; break;
        
                            case "enable": result = "Fornecedor ativado com sucesso."; break;
                        }
                        break;






            case "error":
                switch (reason) {

                    case "generic": result = "Algo deu errado. Tente novamente."; break;

                }
                break;






















        }



        return result;

    }
} module.exports = new Helper();