// method : get
// url : api/user/etudiant/me
// acces : private

const getUserEtudiant = (req, res) => {
  res.json({
    role: "etudiant",
    name: req.user.user.name,
  });
};
module.exports = {
  getUserEtudiant,
};
