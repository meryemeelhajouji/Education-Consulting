
// method : get
// url : api/user/Livreure/me
// acces : private
const getUserAdmin =  (req,res) => {
    res.json({
        role: "admin",
        name: req.user.user.name ,
      });

}
module.exports = {
    getUserAdmin
}