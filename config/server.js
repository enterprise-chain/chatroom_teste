/* Importar o express*/
const express = require('express');
/*Importar o consign */
const consign = require('consign');
/*Importar o bosy-parser */
const bodyParser = require('body-parser');
/*Iniciando o express */
const app = express();
/*Setar as views*/
app.set('view engine', 'ejs');
app.set('views', './app/views');
/*Configurando  os middlewares */
app.use(express.static('./app/public'));
/*Body parser */
app.use(bodyParser.urlencoded({ extended: true }));
/*Configurando o consign */
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);
    /*Exportar o express */
    module.exports = app;