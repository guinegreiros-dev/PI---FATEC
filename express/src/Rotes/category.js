const express = require('express');
const bodyParser = require('body-parser');
const encoder = bodyParser.urlencoded();
const CategoryController = require('../Controller/CategoryController');

const CategoryC = new CategoryController();

const router = express.Router();

router.post('/', encoder,async(req,res) =>{

    res.send(await CategoryC.create(req));
});

router.get('/', encoder,async(req,res) =>{

    res.send(await CategoryC.list(req, res));
});  

router.put('/', encoder,async(req,res) =>{

    res.send(await CategoryC.edit(req));
});

router.delete('/:categoryId', encoder,async(req,res) =>{

    res.send(await CategoryC.disable(req));
});

router.post('/:categoryId', encoder,async(req,res) =>{

    res.send(await CategoryC.enable(req));
});

router.get('/:categoryId', encoder,async(req,res) =>{

    res.send(await CategoryC.specific(req));
});

module.exports = router
