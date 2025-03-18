const router = require('express').Router()
const {AllUser,DeleteUser,editeUser,getToken} = require('../controller/userController')
const {Authorization,verifyTokenAndAdmin} = require ('../middelware/Authorization')
router.route('/').get(verifyTokenAndAdmin,AllUser)
router.route('/token').get(getToken)
router.route('/:id').delete(verifyTokenAndAdmin,DeleteUser).put(verifyTokenAndAdmin,editeUser)
module.exports = router;
