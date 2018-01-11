const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Subir express
const app = express();

//conectando ao banco
mongoose.connect('mongodb://localhost/controlFisc');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

//pag inicial
app.use(require('./routes/api'));

//requests
app.listen(process.env.port || 3000, function() {
    console.log("Sucesso!");
});
