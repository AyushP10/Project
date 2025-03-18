// Importing Express
const express = require('express');
const userRouter = require('./routers/userRouter');
const empRouter = require('./routers/empRouter');
const taskRouter = require('./routers/taskRouter')

const cors = require('cors');


const app = express();

const port = 5000;

// middleware
app.use(cors({ origin: ['http://localhost:3000'] }));
app.use(express.json());
app.use('/users', userRouter);
app.use('/empsignup', empRouter);
app.use('/tasks', taskRouter);


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





