const express = require('express');
const bodyParser = require('body-parser');
const encoder = bodyParser.urlencoded();
const carController = require('../Controller/Car');

const CarC = new carController();

const router = express.Router();

router.get('/allCars', encoder,async(req,res) =>{

    res.send(await CarC.getAllCars());
});

router.post('/newCar', encoder,async(req,res) =>{

    res.send(await CarC.postNewCar(req));
});

module.exports = router
