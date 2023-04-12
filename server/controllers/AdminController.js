
// method : get
// url : api/user/Livreure/me
// acces : private
const getUserAdmin =  (req,res) => {
    res.json("bonjour "+req.user.user.name + " :  Admin")

}
module.exports = {
    getUserAdmin
}