const express = require("express");
const router = express.Router();
const aiController = require("../controllres/Gemini.ai.controller");

router.post("/get-review",aiController.getReview);




module.exports = router;

