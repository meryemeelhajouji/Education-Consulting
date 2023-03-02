mongoose = require("mongoose");

mongoose
  .connect(process.env.MONG_URL)
  .then(() => {
    console.log("connection succ");
  })
  .catch((err) => console.log(err));