const express = require('express')
const router = express.Router()
const KamarCtr = require('../controllers/kamar')
const jwt = require('../helper/jwt')

// upload image
const imagesMulter = require('../helper/multer-images')
const upload = imagesMulter.multer.single('picture')
const GCPupload = imagesMulter.sendUploadToGCS

router.get('/', KamarCtr.findAll)
router.post('/', upload, GCPupload, KamarCtr.postKamar)
router.put('/:kamarId', upload, GCPupload, KamarCtr.updateKamar)
router.get('/:kosanId', KamarCtr.kamarByKosan) //get kamar by Kosan
router.delete('/:kamarId', KamarCtr.findAll)



module.exports = router