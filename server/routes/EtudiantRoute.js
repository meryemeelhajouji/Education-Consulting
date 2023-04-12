const express = require('express')
const router = express.Router()
const {verify} = require('../Middlewares/verification ')


const {getUserEtudiant, getAllEtudiant, updateEtudiant, deleteEtudiant} = require('../controllers/EtudiantController')

router.get("/etudiant/me",verify(['etudiant']) ,getUserEtudiant)
router.get('/etudiant',getAllEtudiant)
router.put('/:id', updateEtudiant);
router.delete('/:id', deleteEtudiant);



module.exports = router