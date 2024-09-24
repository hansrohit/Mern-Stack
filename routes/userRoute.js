const Users = require("../models/userModel");
const express = require("express");
const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    const fetchedusers = await Users.find();
    res.status(200).json(fetchedusers);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/add", async (req, res) => {
  try {
    const newuserdata = new Users(req.body);
    const { Name, email } = newuserdata;
    if (!Name || !email) {
      res.status(400).json({ message: "Name & email Required" });
    }
    const savedata = await newuserdata.save();
    res.status(201).json(savedata);
  } catch (error) {
    res.status(500).json(error);
  }
});
router.put("/edit/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const currentrecord = await Users.findOne({ _id: id });
    if (!currentrecord) {
      res.status(404).json({ message: "User not found !" });
    }
    const updateUser = await Users.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(500).json(error);
  }
});
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const currentrecord = await Users.findOne({ _id: id });
    if (!currentrecord) {
      res.status(404).json({ message: "User not found !" });
    }
    const deleteUser = await Users.findByIdAndDelete(id);
    res.status(200).json({ message: "User Deleted !" });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
