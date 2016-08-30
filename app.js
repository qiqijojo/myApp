/**
 * Created by wangqi on 16-8-1.
 */
const barcode = require("./BarcodeToZipcode");
const zipcode = require("./ZipcodeToBarcode");
let Barcode = new barcode();
let Zipcode = new zipcode();
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send(Zipcode.transformToBarCode(req.query.code));
});
var zipcodeServer = app.listen(3001, function () {
    var host = zipcodeServer.address().address;
    var port = zipcodeServer.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});


app.get('/barcode', function (req, res) {
    res.send(Barcode.transformToZipCode(req.query.code));
});
var barcodeServer = app.listen(3002, function () {
    var host = barcodeServer.address().address;
    var port = barcodeServer.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});