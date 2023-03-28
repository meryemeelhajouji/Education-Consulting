const express = require('express')
const router = express.Router()
const {verify} = require('../Middlewares/verification ')

const {getUserLivreure} = require('../Controllers/livreureController')

router.get("/livreure/me",verify(['Livreure']), getUserLivreure)


module.exports = router