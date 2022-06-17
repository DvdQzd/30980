"use strict";
var express = require('express');
var app = express();
var PORT = 8080;
var colors = require('./lib/colors.ts');
app.get('/getColor', function (req, res) {
    var miColor = new colors();
    res.status(200).send(miColor.getColor());
});
app.listen(PORT, function () { console.log("Server running on PORT: ".concat(PORT)); });
