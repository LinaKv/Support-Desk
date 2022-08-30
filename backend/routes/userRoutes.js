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
const { registerUser, loginUser } = require("../controllers/userController");

router.post("/", registerUser);
router.post("/login", loginUser);

module.exports = router;
