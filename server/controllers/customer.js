const CustomerModel = require('../models/Customer')
const bcrypt = require('bcrypt');
const salt   = bcrypt.genSaltSync(10)

class Customer {
    constructor() {
        
    }

    static findAllCustomer (req,res) {
        CustomerModel.find()
        .then( result => {
            res.send(result)
        })
        .catch(err => {
            console.error(err)
            res.send(err)
        })
    }

    static createCustomer (req,res) {
        var hash = bcrypt.hashSync(req.body.password, salt)
        CustomerModel.create({
            username: req.body.username,
            password: hash,
            email: req.body.email
        })
        .then( result => {
            res.send(result)
        })
        .catch( err => {
            console.error(err)
            res.send(err)
        })
    }

    static findOneCustomer (req,res) {
        CustomerModel.findOne({_id:req.params.id})
        .then( result => {
            console.log(result)
        })
        .catch( err => {
            console.error(err)
            res.send(err)
        })
    }

    static updateCustomer (req,res) {

    }

    static deleteCustomer (req,res ) {
        CustomerModel.findOneAndRemove({_id:req.params.id})
        .then( result => {
            res.send(result)
        })
        .catch( err => {
            console.error(err)
            res.send(err)
        })
    }
    
}

module.exports = Customer