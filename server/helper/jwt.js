const jwt = require('jsonwebtoken');
require('dotenv').config()


export const isLogin = (req,res,next) => {

    jwt.verify(req.body.token, process.env.SECRET_KEY, (err,decoded) =>{
        if(!err) {
            req.locals = decoded
            next()
        } else{
            res.send(err)
        }
    })

}

export const isAdmin = (req,res,next) => {
    if (req.locals.role === 'admin'){
        next()
    } else {
        res.send('You are not an admin')
    }
}

export const authUser = (req,res,next) => {
    console.log('==== ini locals id === ' + req.locals.id);
    console.log('==== ini params id === ' + req.params.id);
    console.log('==== ini body id === ' + JSON.stringify(req.body.id))
    if (req.locals.id === req.params.id) {
        next()
    }
    else if (req.locals.id === req.body.id) {
        next()
    }
    else {
        res.send("access denied")
    }

}

