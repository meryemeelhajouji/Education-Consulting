const dotenv = require("dotenv");
const User = require("../models/User");
const Role = require("../models/Role");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const local_storage = require("local-storage");
const { restart } = require("nodemon");

// method  : post
// url     : api/auth/login
// acces   : Public
const login = async (req, res) => {
  const { body } = req;

  //   chack validation
  if (!req.body.email || !req.body.password) {
    res.status(400).send(" please enter email or name or password ");
  }

  // ckeck if email exist
  const user = await User.findOne({ email: body.email }).populate({
    path: "roleid",
    model: Role,
  });
  if (!user) {
    res.status(404).send("user not found");
  }

  //   ckeck if password is correct
  const isCorrect = await bcrypt.compare(body.password, user.password);
  if (!isCorrect) {
    res.status(401).send("passsord invalid // unauthorized");
  }

  //   ckeck if email is valid
  if (user.status == "valid") {
    const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: "120m" });
    local_storage("token", token);
    res.json({
      token: local_storage("token"),
      role: user.roleid.type,
      name: user.name,
    });
  } else {
    res.status(401).send("please verify your email");
  }
};

// method : post
// route : api/auth/register
// acces : Public
const register = async (req, res) => {
  // check validation
  if (!req.body.email || !req.body.name || !req.body.password) {
    res.status(400).send(" please enter email or name or password ");
  }
  if (req.body.password != req.body.password2) {
    res.status(400).send(" password not match");
  }

  const { body } = req;

  //   ckeck if email exist
  const user = await User.findOne({ email: body.email });
  if (user) {
    res.status(400).send("can not create // email déja existe");
  }

  //   ckeck if role exist
  const myRole = await Role.findOne({ type: body.role });
  if (!myRole) {
    res.status(400).send("can not create //role not existe");
  }

  //   generation of token
  body.roleid = myRole._id;
  const token = jwt.sign({ id: User._id }, process.env.SECRET);
  body.token = token;

  //   hash password
  bcrypt
    .hash(body.password, 10)
    .then((hashPassword) => {
      body.password = hashPassword;

      const mailOptions = {
        from: "meryemelhajouji.99@gmail.com", // sender address
        to: body.email, // list of receivers
        subject: "Verify your email",
        html: `<h1>Hello ${body.name}</h1>
                            <p> Click for lien for reset your password </p>
                            <a href="http://localhost:${process.env.PORT_CLIENT}/VerifyEmail/${body.token}">verify your email </a> `, //plain ,text body
      };
      User.create({ ...body })
        .then(() => {
          res.status(201).send("created");
          transporter.sendMail(mailOptions, function (err, info) {
            if (err) res.send(err);
            else
              res.json({
                message: "verification email is send to your email account",
              });
          });
        })
        .catch(() => {
          res.status(400).send("not created // something woring ");
        });
    })
    .catch(() => {
      res.send("error in hash");
    });
};
module.exports = {
  login,
  register,
};
