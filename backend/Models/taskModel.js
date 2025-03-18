

const { Schema, model } = require('../connection');



const newSchema = new Schema({
    emp_name: {type: String, require: true},
    emp_email: {type: String, require: true},
    task: {type: String, require:true},
    details: {type: String, require:true},
    deadline: {type: Number, require: true},
    // createdAt: {type: Date.now }

})


module.exports = model('tasks', newSchema);


