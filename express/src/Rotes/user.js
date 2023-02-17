const express = require('express');
const bodyParser = require('body-parser');
const encoder = bodyParser.urlencoded();
const userController = require('../Controller/UserController');

const UserC = new userController();

const router = express.Router();

router.post('/login', encoder,async(req,res) =>{

    res.send(await UserC.login(req));
});

router.get('/allUser', encoder,async(req,res) =>{

    res.send(await UserC.getAllUsers());
});  

router.put('/', encoder,async(req,res) =>{

    res.send(await UserC.updateUser(req));
});

router.post('/newUser', encoder,async(req,res) =>{

    res.send(await UserC.postNewUser(req));
});

router.delete('/:userId', encoder,async(req,res) =>{

    res.send(await UserC.inativeUser(req));
});

router.post('/:userId', encoder,async(req,res) =>{

    res.send(await UserC.enableUser(req));
});

router.get('/:userId', encoder,async(req,res) =>{

    res.send(await UserC.getSpecificUsers(req));
});

module.exports = router
