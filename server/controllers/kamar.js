const KamarModel = require('../models/Kamar')
const redis = require('redis')

class KamarClass {
    constructor() {
    }

    static findAll (req,res) {
        KamarModel.find()
        .populate({path: 'kosanId', populate:{path:'mitraId', select: 'username email phone'}})
        .then( result => {
            res.send(result)
        }).catch ( err => {
            res.send( err )
        })
    }

    static postKamar (req,res) {
        KamarModel.create({
            kosanId: req.body.kosanId,
            name: req.body.name,
            description: req.body.description,
            picture: req.body.picture,
            category: req.body.category,
            price: req.body.price
        }).then (result => {
            res.send(result)
        }).catch( err => {
            res.send(err)
        })
    }

    static kamarByKosan (req,res) {
        KamarModel.find({kosanId:req.params.kosanId})
        .then( result => {
            res.send(result)
        }).catch( err => {
            res.send(err)
        })
    }

    static singleKamar (req,res) {
        KamarModel.findOne({_id:req.params.kamarId})
        .then( result => {
            res.send(result)
        }).catch(err => {
            res.send(err)
        })
    }

    static updateKamar (req,res) {
        KamarModel.findOneAndUpdate(
            {_id:req.params.kamarId},
            {
                $set: {
                    name: req.body.name,
                    description: req.body.description,
                    picture: req.bodu.picture,
                    category: req.body.category,
                    price: req.body.price
                }
            },
            {new:true}
        ).then( result => {
            res.send(result)
        }).catch( err => {
            res.send(err)
        })
    }

    static deleteKamar (req,res) {
        KamarModel.findOneAndRemove({_id:req.params.kamarId})
        .then( result => {
            res.send(result)
        }).catch( err => {
            res.send(err)
        })
    }
}

module.exports = KamarClass