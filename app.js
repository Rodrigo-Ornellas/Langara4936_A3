const express = require('express');
const app = express();

// Starts the Server on port 8081
app.listen(8081, () => {
    console.log('\nListening on port 8081\n');
})

// Middlewares
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }))
// express.urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays.This method is called as a middleware in your application and it parses the body part of the request and allows us to access the data sent from the frontend as key, value pairs


// Home Endpoint that will have a form
app.get('/', (req, res) => {
    res.render('index');
})

// Home Endpoint that will have a form
app.get('/appointments', (req, res) => {
    res.render('success', { appointment: req.body });
})