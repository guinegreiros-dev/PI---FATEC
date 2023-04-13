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

router.delete('/:orderId', encoder,async(req,res) =>{

    res.send(await OrderC.disable(req));
});

router.post('/:orderId', encoder,async(req,res) =>{

    res.send(await OrderC.enable(req));
});

router.get('/:categoryId', encoder,async(req,res) =>{

    res.send(await OrderC.specific(req));
});

router.get('/:orderId/products', encoder,async(req,res) =>{

    res.send(await OrderC.listProductByOrder(req));
});

module.exports = router
