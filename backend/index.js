// Importing Express
const express = require('express');

const cors = require('cors');




const app = express();

const port = 5000;

// middleware
app.use(cors({ origin: ['http://localhost:3000'] }));
app.use(express.json());


// route or endpoint 
app.get('/', (req, res) => {
    res.send('response from Express');
})

app.get('/add', (req, res) => {
    res.send('response from Add');
})

app.get('/getall', (req, res) => {
    res.send('response for Get All');
})

app.get('/delete', (req, res) => {
    res.send('response for Delete');
})


app.listen(port, () => {
    console.log('server started');
    
})





