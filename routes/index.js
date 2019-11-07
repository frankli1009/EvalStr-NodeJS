'use strict';
var express = require('express');
var router = express.Router();
var domready = require('document-ready');

var getData = function () {
    var data = {
        'item1': 'images/MathExp1.png',
        'item2': 'images/MathExp2.png',
        'item3': 'images/MathExp3.png'
    }
    return data;
}

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Evaluating Expressions', "data": getData() });
});

module.exports = router;
