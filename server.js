const express = require ("express");
const routerHome = require ('./routes/homeRoute');
const routerLogin = require ('./routes/loginRouter');
const routerUsuarios = require ('./routes/usuarioRouter.js');
const expressEjsLayout = require('express-ejs-layouts')


const app = express ();

app.use(express.urlencoded({extended:true}));

app.set ('view engine', 'ejs');
app.set ('layout','./layout');

app.use (express.static('public'));
app.use(expressEjsLayout);
app.use ('/', routerHome);
app.use('/login', routerLogin);
app.use('/usuarios', routerUsuarios);

app.listen ( 5000, function (){
    console.log('Servido está funcionando' );
})                                                  