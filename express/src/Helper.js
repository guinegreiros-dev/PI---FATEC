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
    
                        case "edited": result = "Produto editado com sucesso."; break;
    
                        case "disable": result = "Produto desativado com sucesso."; break;
    
                        case "enable": result = "Produto ativado com sucesso."; break;
                    }
                    break;

                    case "category":
                        switch (reason) {
        
                            case "created": result = "Categoria cadastrado com sucesso."; break;
        
                            case "edited": result = "Categoria editado com sucesso."; break;
        
                            case "disable": result = "Categoria desativado com sucesso."; break;
        
                            case "enable": result = "Categoria ativado com sucesso."; break;
                        }
                        break;

                        case "order":
                            switch (reason) {
            
                                case "created": result = "Pedido cadastrado com sucesso."; break;
            
                                case "edited": result = "Pedido editado com sucesso."; break;
            
                                case "disable": result = "Pedido desativado com sucesso."; break;
            
                                case "enable": result = "Pedido ativado com sucesso."; break;
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