const express = require('express');
const router = express.Router();
const jwt = require('../helper/jwt')
const KosanCtrl = require('../controllers/kosan')

router.get('/', KosanCtrl.findAll)
router.post('/', KosanCtrl.postKosan) //register
// router.get('/:id', UserCtrl.findOneUser)
router.put('/:id', KosanCtrl.updateKosan)
router.delete('/:id', KosanCtrl.deleteKosan)


module.exports = router