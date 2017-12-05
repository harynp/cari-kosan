const express    = require('express')
const bodyParser = require('body-parser')
const mongoose   = require('mongoose')
const cors       = require('cors')
const app        = express()

mongoose.connect('mongodb://localhost/cari-kosan', (err) => {
    if (!err) { console.log('mongoose connected'); }
    else { console.log('ERROR, NOT CONNECTED'); }
})

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// const user  = require('./routes/user')
// const kosan = require('./routes/kosan')

// app.use('/user', user)
// app.use('/kosan', kosan)

app.listen(3000,(err)=>{ 
    if (err) console.log('ERROR PORT 3000')
    console.log('PORT 3000 SERVER')
})


