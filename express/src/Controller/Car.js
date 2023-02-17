const CarModel = require('../Model/Car');

const CarM = new CarModel()

class Car{
    
    async getAllCars(){

        let lero = await CarM.allCars()

        return lero;
    }

    async postNewCar(req){

        let  {
            bodyName,
            bodyModel,
            bodyPlaca,
            bodyMarca,
            bodyCor,
            bodyUser
           } = req.body

           let allCarsQuery = await CarM.allCars();

           let test;
           let response;
   
           for (const iterator of allCarsQuery) {
   
               if(iterator.placa === bodyPlaca){
   
                   test = iterator;
               }
           }

           if(test === undefined){
        
            response = await CarM.newCar(bodyName, bodyModel, bodyPlaca, bodyMarca, bodyCor, bodyUser)
        }else{
    
            response = "Dados já cadastrados.";
        }

        return response;
    }
    
}module.exports = Car;

