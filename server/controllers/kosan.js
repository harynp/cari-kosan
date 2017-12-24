const KosanModel = require('../models/Kosan')
const redis = require('redis');

class Kosan {
    constructor() {
        
    }

    static findAll (req,res) {
        KosanModel.find()
        .populate('mitraId', 'username phone email')
        .then(result => {
            res.send(result)
        })
        .catch(err =>{
            console.error(err)
            res.send(err)
        })
    }

    static postKosan(req, res) {
        KosanModel.create({
            mitraId: req.body.mitraId,
            name: req.body.name,
            fullAddress: req.body.fullAddress,
            kelurahan: req.body.kelurahan,
            kecamatan: req.body.kecamatan,
            kotaDesa: req.body.kotaDesa,
            provinsi: req.body.provinsi,
            kodepos: req.body.kodepos
        }).then(result => {
            res.send(result)
        }).catch(err => {
            console.error(err)
            res.send(err.errors.mitraId.message)
        })
    }

    static updateKosan(req, res){
        KosanModel.findOneAndUpdate(
            {_id:req.params.id},
            {$set:{
                mitraObjectId: req.body.mitraId,
                name: req.body.name,
                fullAddress: req.body.fullAddress,
                kelurahan: req.body.kelurahan,
                kecamatan: req.body.kecamatan,
                kotaDesa: req.body.kotaDesa,
                provinsi: req.body.provinsi
            }},
            {new:true}
        ).catch(err => {
            console.error(err)
        })
    }

    static deleteKosan(req, res){
        KosanModel.findOneAndRemove({_id: req.params.id})
        .then(result =>{
            res.send(result)
        })
        .catch(err=>{
            console.error(err)
        })
    }
}

module.exports = Kosan