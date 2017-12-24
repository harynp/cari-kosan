const express  = require('express');
const router   = express.Router();
const jwt      = require('../helper/jwt')
const UserCtrl = require('../controllers/user')

// upload image
const imagesMulter = require('../helper/multer-images')
const upload = imagesMulter.multer.single('avatar')
const GCPupload = imagesMulter.sendUploadToGCS

router.post('/login', UserCtrl.login)
router.get('/info', jwt.isLogin, UserCtrl.userInfo)
// DEV
router.get('/', jwt.isLogin, jwt.isAdmin, UserCtrl.findAllUser)
router.post('/', upload, GCPupload, UserCtrl.createUser) //register
router.get('/:id', UserCtrl.findOneUser)
router.put('/:id', UserCtrl.updateUser)
router.delete('/:id', UserCtrl.deleteUser)


module.exports = router