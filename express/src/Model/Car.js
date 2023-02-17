class Car{

     async allCars(){

        const mysql = await require('../../connection');

        let [rows] =  await mysql.query("SELECT * FROM cars");

        return rows;
    }

    async newCar(name, model, placa, marca, cor, USERS_id){

        const mysql = await require('../../connection');

        let [rows] =  await mysql.query("INSERT INTO `concessionaria`.`cars` (`name`, `model`, `placa`, `marca`, `cor`, `USERS_id`) VALUES (?, ?, ?, ?, ?, ?);", [name, model, placa, marca, cor, USERS_id]);
        
        return rows;
    }
} module.exports = Car;