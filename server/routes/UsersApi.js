const express = require("express");
const router = express.Router();
const { Users } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const usersList = await Users.findAll();
    res.json({ success: true, usersList });
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
    try {
      const user = req.body;
      await Users.create(user)
      res.json({ success: true, user });
    } catch (error) {
      console.log(error);
    }
  });
  
module.exports = router;