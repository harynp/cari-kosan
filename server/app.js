const express    = require('express')
const bodyParser = require('body-parser')
const mongoose   = require('mongoose')
const cors       = require('cors')
const app        = express()


var atlasURI = 'mongodb://cari-kosan:cari-kosan-mantan-hacktiv8@cluster0-shard-00-00-dwnma.mongodb.net:27017,cluster0-shard-00-01-dwnma.mongodb.net:27017,cluster0-shard-00-02-dwnma.mongodb.net:27017/admin?replicaSet=Cluster0-shard-0&ssl=true'

mongoose.connect('mongodb://localhost/cari-kosan', (err) => {
// mongoose.connect(atlasURI, (err) => {
    if (err) {console.log('NOT CONNECTED', err)}
    else{console.log('mongoose connected')}
})

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const user  = require('./routes/user')
const kosan = require('./routes/kosan')
const kamar = require('./routes/kamar')

app.use('/user', user)
app.use('/kosan', kosan)
app.use('/kamar', kamar)

app.listen(3000,(err)=>{ 
    if (err) console.log('ERROR PORT 3000')
    console.log('PORT 3000 SERVER')
})


