const express = require("express");
const {
  registerUser,
  loginUser,
  currentUser,
} = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

// サインアップAPI
router.post("/register", registerUser);

// ログインAPI
router.post("/login", loginUser);

// 現在ログインしている人を取得するAPI
router.get("/current", validateToken, currentUser);

module.exports = router;
