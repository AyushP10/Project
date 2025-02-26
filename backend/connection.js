

const mongoose = require('mongoose');

const url = "mongodb+srv://ayush10:11ayush22@cluster0.dwpwq.mongodb.net/project?retryWrites=true&w=majority&appName=Cluster0";

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
