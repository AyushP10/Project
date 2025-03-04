

const { Schema, model } = require('../connection');


const mySchema = new Schema({
    name: { type: String, require: true},
    email: { type: String, unique: true },
    contact: {type: Number, require: true },
    password: { type: String, require: true },
    city: { type: String, default: 'unknown' },
    createdAt: { type: Date, default: Date.now() }
})




module.exports = model('users', mySchema);


