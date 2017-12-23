const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var customerSchema = new Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true }
}, { timestamps: true })

var customer = customer.model('user', customerSchema);

module.exports = customer
