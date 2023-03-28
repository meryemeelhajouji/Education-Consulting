const express = require('express')
const router = express.Router()
const {verify} = require('../Middlewares/verification ')


const {getUserClient} = require('../Controllers/clientController')

router.get("/client/me",verify(['Client']) ,getUserClient)


module.exports = router