const express = require("express");
const router = express.Router();

//POST /api/login -simulate login
router.post("/login", (req, res) ==> {
    res.json({ message: "Login successful (simulated)"});
});

//POST /api/register - silmulate registration
router.post("/reguster", (req, res) => {
    res.json({ message: "User registered (simulate)"});
});

module.exports = router;