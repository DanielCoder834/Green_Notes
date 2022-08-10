const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'))
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/notebook', (req, res) => {
    res.render('notepad');
})

app.listen(3000, () => {
    console.log('Listening to port 3000');
})