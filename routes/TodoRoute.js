const { Router } = require("express");
const {
  getUser,
  saveUser,
  deleteUser,
  updateUser,
} = require("../controler/Todocontroller");

const router = Router();

router.get("/", getUser);

router.post("/save", saveUser);

router.post("/update", updateUser);

router.post("/delete", deleteUser);

module.exports = router;
