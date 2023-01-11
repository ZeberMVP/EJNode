const express = require('express')
const cowsay = require('cowsay')
const calculator = require('./modules/calculator')
const { render } = require('pug')
//import {  } from "module";

const app = express()
const port = 3000

app.set('view engine', 'pug');
app.set('views','./views');



app.get('/', (req, res) => {
    const suma = calculator.add(2,2);
    //res.send(`Hello World! La suma es ${suma}`)
    res.render("content", {suma})
})

// http://localhost:3000/pokemon?a=1&b=2
// http://localhost:3000/pokemon
// http://localhost:3000/pokemon?aaaaaa=34
app.get('/pokemon', (req, res) => {
    console.log(req.query);
    const {a,b} = req.query;
    console.log(a,b)
    const resta = calculator.sub(a,b);
    res.send(`Ahí va pikachu! ${a}-${b} es ${resta}`)
})

app.get('/first_template', function(req, res){
    res.render('first_view');
 });

app.listen(port, () => { console.log(`Server listening on port ${port}`)})