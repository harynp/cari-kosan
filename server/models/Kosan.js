const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var kosanSchema = new Schema({
    mitraObjectId: {
        type: Schema.Types.ObjectId,
        ref: 'mitra'
    },
    name: { type: String, unique: true, required: true },
    fullAddress: { type: String, required: true },
    kelurahan: { type: String, required: true },
    kecamatan: { type: String, required: true },
    kotaDesa: { type: String, required: true },
    provinsi: { type: String, required: true },
    kodepos: { type: String, required: true }
}, { timestamps: true })

var kosan = mongoose.model('kosan', kosanSchema);

module.exports = kosan
