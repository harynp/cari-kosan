const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var kamarSchema = new Schema({
    kosanObjectId: { // populate address from kosan
        type: Schema.Types.ObjectId,
        ref: 'kosan'
    },
    Name: { type: String, unique: true, required: true },
    description: { type: String, unique: true, required: true },
    category: [], // AC, kamar mandi dalam, kamar mandi luar, 
    price: {type:Number, required:true}
}, { timestamps: true })

var kamar = mongoose.model('kamar', kamarSchema);

module.exports = kamar
