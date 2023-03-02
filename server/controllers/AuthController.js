const dotenv = require("dotenv");
const User = require("../models/User");
const Role = require("../models/Role");

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
  if (!req.body.email || !req.body.name || !req.body.password) {
    res.status(400).send(" please enter email or name or password ");
  }
  if (req.body.password != req.body.password2) {
    res.status(400).send(" password not match");
  }

  const { body } = req;
  User.findOne({ email: body.email }).then((e) => {
    // console.log('user=> '+e)
    if (!e) {
      Role.findOne({ type: body.role }).then((myRole) => {
        if (myRole) {
          // console.log(myRole)
          body.roleid = myRole._id;
          const token = jwt.sign({ id: User._id }, process.env.SECRET);
          body.token = token;
          bcrypt
            .hash(body.password, 10)
            .then((hashPassword) => {
              body.password = hashPassword;

              User.create({ ...body })
                .then(() => {
                  res.status(201).send("created");
                })
                .catch(() => {
                  res.status(400).send("not created // something woring ");
                });
            })
            .catch(() => {
              res.send("error in hash");
            });
        } else {
          res.status(400).send("can not create //role not existe");
        }
      });
    } else {
      res.status(400).send("can not create // email déja existe");
    }
  });
};
module.exports = {
  login,
  register,
};
