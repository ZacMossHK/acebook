const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/users");

router.get("/new", UsersController.New);
router.post("/", UsersController.Create);
// router.get("/profile/:userId", UsersController.Profile);

module.exports = router;
