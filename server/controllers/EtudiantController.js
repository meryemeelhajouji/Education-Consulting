// method : get
// url : api/user/etudiant/me
// acces : private
const getUserEtudiant =  (req,res) => {
    res.status(201).send("bonjour "+req.user.user.name + " : Etudiant")
}
module.exports = {
    getUserEtudiant
}