// method : get
// url : api/user/client/me
// acces : private
const getUserClient =  (req,res) => {
    res.status(201).send("bonjour "+req.user.user.name + " votre role est client")
}
module.exports = {
    getUserClient
}