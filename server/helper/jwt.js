const jwt = require('jsonwebtoken');
require('dotenv').config()


const isLogin = (req,res,next) => {
    jwt.verify(req.headers.token, process.env.USER_SECRET, (err,decoded) =>{
        if(!err) {
            req.locals = decoded
            next()
        } else{
            res.send(err)
        }
    })

}

const isAdmin = (req,res,next) => {
    if (req.locals.role === 'admin'){
        next()
    } else {
        res.send('You are not an admin')
    }
}

const authUser = (req,res,next) => {
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


module.exports= {
    isLogin,
    isAdmin,
    authUser
}
