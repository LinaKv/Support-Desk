// const express = require("express");
// const router = express.Router();

// router.post("/", (req, res) => {
//   res.send("Register Router");
// });

// router.post("/login", (req, res) => {
//   res.send("Register Router");
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

module.exports = router;
