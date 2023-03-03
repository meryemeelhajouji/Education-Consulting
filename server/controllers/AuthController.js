const dotenv = require("dotenv");
const User = require("../models/User");
const Role = require("../models/Role");
const bcrypt=require('bcryptjs')
const jwt = require('jsonwebtoken');
const { restart } = require("nodemon");

// method  : post
// url     : api/auth/login
// acces   : Public
const login = async (req, res) => {
  res.send("hello meryeme ");
};

// method : post
// route : api/auth/register
// acces : Public
const register = async (req, res) => {
  
    const { email, password } = req.body;

 
  // check if admin exists
  const user = await User.findOne({ email });
  if (!user) {
  res.status(400).send("email déja existe");
  }
   
  // check if role exists
  const role = await Role.findOne({ email });
  if (role) {
  res.status(400).send("role not found");
  }

   // check if password matches
   const isMatch = await bcrypt.compare(password, user.password);
   if (!isMatch) {
     let error = new Error('Invalid credentials');
     error.status = 400;
     throw error;
   }
//   const { body } = req;
//   User.findOne({ email: body.email }).then((e) => {
//     // console.log('user=> '+e)
//     if (!e) {
//       Role.findOne({ type: body.role }).then((myRole) => {
//         if (myRole) {
//           // console.log(myRole)
//           body.roleid = myRole._id;
//           const token = jwt.sign({ id: User._id }, process.env.SECRET);
//           body.token = token;
//           bcrypt
//             .hash(body.password, 10)
//             .then((hashPassword) => {
//               body.password = hashPassword;

//               User.create({ ...body })
//                 .then(() => {
//                   res.status(201).send("created");
//                 })
//                 .catch(() => {
//                   res.status(400).send("not created // something woring ");
//                 });
//             })
//             .catch(() => {
//               res.send("error in hash");
//             });
//         } else {
//           res.status(400).send("can not create //role not existe");
//         }
//       });
//     } else {
//       res.status(400).send("can not create // email déja existe");
//     }
//   });
};
module.exports = {
  login,
  register,
};
