const express = require('express')
const router = express.Router()
const {verify} = require('../Middlewares/verification ')


const {getUserEtudiant} = require('../controllers/EtudiantController')

router.get("/etudiant/me",verify(['etudiant']) ,getUserEtudiant)


module.exports = router