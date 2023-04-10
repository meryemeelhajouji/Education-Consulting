
const express = require('express')
const router = express.Router()

const {login,register,forgetPassword,resetPassword,verifyEmail,updatePassword,Logout} = require('../controllers/AuthController')

router.post('/login',login)
router.post('/register',register)
router.get('/logout',Logout)
router.get('/verify-email/:token',verifyEmail)
router.post('/forgetpassword',forgetPassword)
router.post('/updatePassword/:token',updatePassword)
router.post('/resetpassword/:token',resetPassword)

module.exports = router