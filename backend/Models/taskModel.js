

const { Schema, model } = require('../connection');



const neSchema = new Schema({
    emp_name: {type: String, require: true},
    emp_id: {type: Number, require:true},
    task: {type: String, require:true},
    details: {type: String, require:true},

})


module.exports = model('tasks', neSchema);


