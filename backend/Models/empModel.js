

const { Schema, model } = require('../connection');



const newSchema = new Schema({
    name: {type: String, require: true},
    depart: {type: String, require:true},
    email: {type: String, unique:true},
    contact: {type:Number, require:true},
    password: {type: String, require:true}

})


module.exports = model('emp', newSchema);


