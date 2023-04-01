const express = require('express');
const bodyParser = require('body-parser');
const encoder = bodyParser.urlencoded();
const ProductController = require('../Controller/ProductController');

const ProductC = new ProductController();

const router = express.Router();

router.post('/', encoder,async(req,res) =>{

    res.send(await ProductC.create(req));
});

router.get('/', encoder,async(req,res) =>{

    res.send(await ProductC.list(req, res));
});  

router.put('/', encoder,async(req,res) =>{

    res.send(await ProductC.edit(req));
});

router.delete('/:productId', encoder,async(req,res) =>{

    res.send(await ProductC.disable(req));
});

router.post('/:productId', encoder,async(req,res) =>{

    res.send(await ProductC.enable(req));
});

router.get('/:productId', encoder,async(req,res) =>{

    res.send(await ProductC.specific(req));
});

module.exports = router
