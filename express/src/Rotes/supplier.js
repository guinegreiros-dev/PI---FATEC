const express = require('express');
const bodyParser = require('body-parser');
const encoder = bodyParser.urlencoded();
const SupplierController = require('../Controller/SupplierController');

const SupplierC = new SupplierController();

const router = express.Router();

router.post('/', encoder,async(req,res) =>{

    res.send(await SupplierC.addSupplier(req));
});

router.get('/', encoder,async(req,res) =>{

    res.send(await SupplierC.list(req, res));
});  

router.put('/', encoder,async(req,res) =>{

    res.send(await SupplierC.editSupplier(req));
});

router.delete('/:supplierId', encoder,async(req,res) =>{

    res.send(await SupplierC.disable(req));
});

router.post('/:supplierId', encoder,async(req,res) =>{

    res.send(await SupplierC.enable(req));
});

router.get('/:supplierId', encoder,async(req,res) =>{

    res.send(await SupplierC.specific(req));
});

module.exports = router
