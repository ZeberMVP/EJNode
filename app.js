const express = require('express');
const cowsay = require('cowsay');
const { render } = require('pug')

const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', (req, res) => {
    res.render("home", {page: "home"})
});

app.get('/contact', (req, res) => {
    res.render("contact", {page: "contact"})
});

app.get('/about', (req, res) => {
    res.render("about", {page: "about"})
});

app.listen(port, () => {
    console.log(
        cowsay.say({
            text: `Nos vamos a por tortilla (si queda) Example app listening on port http://localhost:${port}`,
            e: "oO",
            T: "U "
        }));
});