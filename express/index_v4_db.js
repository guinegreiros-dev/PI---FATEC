const express = require('express');
const userRote = require('./src/Rotes/user');
const supplierRote = require('./src/Rotes/supplier');
const ProductRote = require('./src/Rotes/product');
const CategoryRote = require('./src/Rotes/category');
let app =  express();

app.use('/user', userRote);
app.use('/supplier', supplierRote);
app.use('/product', ProductRote);
app.use('/category', CategoryRote);

app.listen(8080, function(){

    console.log("ok");
});

