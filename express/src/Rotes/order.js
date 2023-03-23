const express = require('express');
const bodyParser = require('body-parser');
const encoder = bodyParser.urlencoded();
const OrderController = require('../Controller/OrderController');

const OrderC = new OrderController();

const router = express.Router();

router.post('/', encoder,async(req,res) =>{

    res.send(await OrderC.create(req));
});

router.get('/', encoder,async(req,res) =>{

    res.send(await OrderC.list(req, res));
});  

router.put('/', encoder,async(req,res) =>{

    res.send(await OrderC.edit(req));
});

router.delete('/:categoryId', encoder,async(req,res) =>{

    res.send(await OrderC.disable(req));
});

router.post('/:categoryId', encoder,async(req,res) =>{

    res.send(await OrderC.enable(req));
});

router.get('/:categoryId', encoder,async(req,res) =>{

    res.send(await OrderC.specific(req));
});

module.exports = router
