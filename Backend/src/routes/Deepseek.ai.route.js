const express = require("express");
const router = express.Router();
const DeepseekAiController = require("../controllres/Deepseek.ai.controller");
 
router.post("/get-review",DeepseekAiController.getReview);




module.exports = router;

