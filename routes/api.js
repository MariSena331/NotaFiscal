const express = require("express");
const router = express.Router();
const Notas = require('../models/notas');


//GET list
router.get('/', function(req, res) {
    db.collection('Notas').find({}).toArray(function (err, docs) {
        if (err) throw err;
    }).then(function(notas){
        res.send(notas);
    });
});

module.exports = router;