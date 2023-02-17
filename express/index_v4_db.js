const express = require('express');
const userRote = require('./src/Rotes/user');
const supplierRote = require('./src/Rotes/supplier');
let app =  express();

app.use('/user', userRote);
app.use('/supplier', supplierRote);

app.listen(8080, function(){

    console.log("ok");
});

