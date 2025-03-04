
require('dotenv').config();
const mongoose = require('mongoose');

const url = process.env.MONGO_URL;

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
    
})
.catch((err) => {
    console.log(err);
    
});

module.exports = mongoose;


// title : string
// price : number
// description : string
// catagory : string
// image : string
