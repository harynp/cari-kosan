const KosanModel = require('../models/Kosan')

class Kosan {
    constructor() {
        
    }

    static findAll (req,res) {
        KosanModel.find()
        .then(result => {
            res.send(result)
        })
        .catch(err =>{
            console.error(err)
            res.send(err)
        })
    }

    static PostOne(req, res) {
        KosanModel.create({
            mitraObjectId: req.body.mitraId,
            name: req.body.name,
            fullAddress: req.body.fullAddress,
            kelurahan: req.body.kelurahan,
            kecamatan: req.body.kecamatan,
            kotaDesa: req.body.kotaDesa,
            provinsi: req.body.provinsi
        }).then(result => {
            res.send(result)
        }).catch(err => {
            console.error(err)
        })
    }

    static updateOne(req, res){
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

    static deleteOne(req, res){
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