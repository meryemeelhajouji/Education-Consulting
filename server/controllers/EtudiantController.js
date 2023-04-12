const Etudiant = require("../models/User");
// method : get
// url : api/user/etudiant/me
// acces : private

const getUserEtudiant = (req, res) => {
  res.json({
    role: "etudiant",
    name: req.user.user.name,
  });
}

// method : get
// url : api/user/etudiant
// acces : private

 const getAllEtudiant = async (req, res,) => {
   try {
    const role ="6433cee0414da9f16584889e"
     const etudiant = await await Etudiant.find({ roleid: role});
     res.status(200).json({
       success: true,
       etudiant: etudiant,
     });
   } catch (error) {
     res.status(400).send(error);
   }
 };



 const updateEtudiant = async (req, res) => {
  let idEtudaint = req.params.id;
  const { body } = req;
  try {
    if (await Etudiant.updateOne({ _id: idEtudaint }, { ...body }))
      res.status(200).send("updated successfully");
    else res.status(400).send("Etudiant dont  existe");
  } catch (error) {
    next(error);
  }
};


const deleteEtudiant = async (req, res) => {
  let idEtudaint = req.params.id;
  try {
    if (await Etudiant.deleteOne({ _id: idEtudaint }))
      res.status(200).send("Etudiant deleted successfully");
  } catch (error) {
    res.status(400).send(error);
  }
};


module.exports = {
  getUserEtudiant,
  getAllEtudiant,
  deleteEtudiant,
  updateEtudiant,
};
