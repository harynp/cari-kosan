const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var mitraSchema = new Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    phone: {type:string, required:true},
    description: {type: string},
    fullAddress: { type: String, required: true }
}, { timestamps: true })

var mitra = mongoose.model('mitra', mitraSchema);

module.exports = mitra
