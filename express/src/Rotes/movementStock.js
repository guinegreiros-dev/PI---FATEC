const express = require('express');
const bodyParser = require('body-parser');
const encoder = bodyParser.urlencoded();
const StockController = require('../Controller/MovementStockController');

const StockC = new StockController();

const router = express.Router();

router.post('/', encoder,async(req,res) =>{

    res.send(await StockC.entryProduct(req));
});

router.get('/', encoder,async(req,res) =>{

    res.send(await StockC.list(req, res));
});

router.delete('/exit', encoder,async(req,res) =>{

    res.send(await StockC.exitStock(req, res));
});

router.get('/log/:stockId', encoder,async(req,res) =>{

    res.send(await StockC.listLogSpecficId(req, res));
});

router.get('/alert', encoder,async(req,res) =>{

    res.send(await StockC.alertMain(req, res));
});
  

// router.put('/', encoder,async(req,res) =>{

//     res.send(await StockC.edit(req));
// });

// router.delete('/:orderId', encoder,async(req,res) =>{

//     res.send(await StockC.disable(req));
// });

// router.post('/:orderId', encoder,async(req,res) =>{

//     res.send(await StockC.enable(req));
// });

// router.get('/:categoryId', encoder,async(req,res) =>{

//     res.send(await StockC.specific(req));
// });

// router.get('/:orderId/products', encoder,async(req,res) =>{

//     res.send(await StockC.listProductByOrder(req));
// });

module.exports = router
