const express = require("express");
const router = express.Router();
const Student = require("../model/model");  
router.post("/login", async (req, resp) => {
  try {
    const name = req.body.name;
    const password = req.body.password;
    console.log(name + " " + password);
    const result1 = await Student.findOne({ name: name });
    if(!result1){
        resp.send("invalid credentials");
        return;
    }
    console.log(result1.password);
    // const isvalid = await bcrypt.compare(password, result1.password);

    // console.log(isvalid);
    if (password !== result1.password ) {
      resp.send("invalid credentials");
      return;
    }

    resp.send("login successfully");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
