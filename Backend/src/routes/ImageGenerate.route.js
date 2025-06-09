const express = require("express");
const router = express.Router();
const HuggingFaceController = require("../controllres/ImageGenerate.controller");

router.post("/get-Image",HuggingFaceController.getImage);




module.exports = router;

