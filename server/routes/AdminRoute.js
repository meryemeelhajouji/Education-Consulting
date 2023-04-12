const express = require('express')
const router = express.Router()
const {verify} = require('../Middlewares/verification ')

const {getUserAdmin} = require('../controllers/AdminController')

router.get("/admin/me",verify(['admin']), getUserAdmin)


module.exports = router