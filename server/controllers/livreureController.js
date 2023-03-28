
// method : get
// url : api/user/Livreure/me
// acces : private
const getUserLivreure =  (req,res) => {
    res.json("bonjour "+req.user.user.name + " votre role est livreur")

}
module.exports = {
    getUserLivreure
}