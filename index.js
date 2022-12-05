
require('dotenv').config()
const express = require('express');
const hbs = require('hbs')

const app = express()
const PORT = process.env.PORT;

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estatico
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Gabo',
        curso: 'Node - Udemy'
    });
})

app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/public/template/index.html')
})

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/template/generic.html')
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Gabo',
        curso: 'Node - Udemy'
    });
})

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/template/elements.html')
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/back/404.html')
})

const server = app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${server.address().port}`);
})