const express = require('express');
const router  = express.Router();
const jwt     = require('./helper/jwt')

router.get('/', jwt.isAdmin) // for testing routes, not yet jwt (should be isAdmin)
// router.post('/') // for testing routes, not yet jwt
router.get('/:id', jwt.isAdmin) // for testing routes, not yet jwt (should be auth User or isAdmin)
router.put('/:id', jwt.isAdmin) // for testing routes, not yet jwt (Should be auth User and isAdmin)
router.delete('/:id', jwt.isAdmin) // for testing routes, not yet jwt (Should be auth User and isAdmin)

router.post('/login')
router.post('register')


module.exports = router