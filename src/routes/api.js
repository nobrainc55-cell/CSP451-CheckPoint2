const express = require("express");
const router = express.Router();

/**
 * Starter endpoint to prove the API works.
 * Feature branch: feature/api-endpoints should expand this structure:
 * - add route modules, controllers, and validation
 * - add at least one POST endpoint
 */

//GET /api/health - confirms API is working
router.get("/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// GET /api/users - returns dummy user list.
router.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Alice"},
    { id: 2, name: "Bob"}
  ]);
});

// POST /api/users - simulates user creation
router.post("/users", (req, res) => {
  const newUser = req.body;
  res.status(201). json({
    message: "User created",
    user: newUser
  });
});

module.exports = { router };
