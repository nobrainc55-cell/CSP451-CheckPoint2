const express = require("express");
const router = express.Router();

//POST /api/login -simulate login
router.post("/login", (req, res) ==> {
    res.json({ message: "Login successful (simulated)"});
});