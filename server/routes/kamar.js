const express = require('express')
const router = express.Router()
const KamarCtr = require('../controllers/kamar')
const jwt = require('../helper/jwt')


router.get('/', KamarCtr.findAll)
router.post('/', KamarCtr.postKamar)
router.put('/:kamarId', KamarCtr.updateKamar)
router.get('/:kosanId', KamarCtr.kamarByKosan)
router.delete('/:kamarId', KamarCtr.findAll)



module.exports = router