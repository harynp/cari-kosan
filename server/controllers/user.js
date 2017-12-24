const UserModel = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const salt   = bcrypt.genSaltSync(10)
require('dotenv').config()

class UserClass {
    constructor() {
        
    }

    static findAllUser (req,res) {
        UserModel.find()
        .then( result => {
            res.send(result)
        })
        .catch(err => {
            res.send(err)
        })
    }

    static createUser (req,res) {
        // res.send(typeof req.file.cloudStoragePublicUrl)
        var hash = bcrypt.hashSync(req.body.password, salt)
        UserModel.create({
            username: req.body.username,
            password: hash,
            email: req.body.email,
            phone: req.body.phone,
            role:req.body.role,
            avatar: req.file.cloudStoragePublicUrl
        })
        .then( result => {
            res.send(result)
        })
        .catch( err => {
            res.send(err)
        })
    }

    static findOneUser (req,res) {
        UserModel.findOne({_id:req.params.id})
        .then( result => {
            res.send(result)
        })
        .catch( err => {
            res.send(err)
        })
    }

    static updateUser (req,res) {
        UserModel.findOneAndUpdate(
            {_id:req.params.id},{
                $set:{
                    username: req.body.username,
                    email:req.body.email,
                    phone: req.body.phone,
                    updatedAt: new Date()
                }
            },
            {new:true}
        ).then( result => {
            res.send(result)
        }).catch(err => {
            console.error(err)
            res.send(err)
        })
    }

    static deleteUser (req,res ) {
        UserModel.findOneAndRemove({_id:req.params.id})
        .then( result => {
            res.send(result)
        })
        .catch( err => {
            res.send(err)
        })
    }

    static login (req,res) {
        UserModel.findOne({ $or:
            [
                {username:req.body.username},
                {email:req.body.username }
            ]
        })
        .then (data => {
            if (bcrypt.compareSync(req.body.password, data.password)){
                let token = jwt.sign(
                    {
                        id: data._id,
                        username: data.username,
                        email: data.email,
                        phone: data.phone,
                        role: data.role
                    }, process.env.USER_SECRET)
                res.send({userToken:token, msg:'success login'})
            } else {
                res.send('wrong Password')
            }
        }).catch( err => {
            res.send('username does not exist !')
        })
    }

    static userInfo (req,res) {
        res.send(req.locals)
    }
    
}

module.exports = UserClass