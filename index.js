//const express = require('express');
import express from "express";
import router from "./routes/index.js";
import db from './config/db.js';

const app = express();

//CONECTAR LA BASE DE DATOS
db.authenticate()
    .then( () => console.log('Base de Datos Conectada con Exito!!') )
    .catch(error => console.log(error));


//DEFINIR PUERTO
const port = process.env.PORT || 4000; // VARIABLE DE ENTORNO

//HABILITAR PUG
app.set('view engine', 'pug');

//OBTENER EL AÑO ACTUAL
app.use((req, res, next) => {
    const year = new Date();

    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio= "Agencia de Viajes";
    next();

})

//AGREGAR BODY PARSER PARA LEER LOS DATOS EN EL FORMULARIO
app.use(express.urlencoded({extended: true}));

//DEFINIR LA CARPETA PUBLICA 
app.use(express.static('public'));

//AGREGAR ROUTER
app.use('/', router); //use SOPORTA TODOS LOS VERBOS put, get, post, etc

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerta ${port}`);
});