// method : get
// url : api/user/client/me
// acces : private
const getUserClient =  (req,res) => {
    res.status(201).send("bonjour "+req.user.user.name + " : client")
}
module.exports = {
    getUserClient
}