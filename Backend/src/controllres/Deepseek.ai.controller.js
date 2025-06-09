const aiService = require("../services/Deepseek.ai.service.js");


module.exports.getReview = async (req, res) => {
    const code = req.body.code; // Get code from post body 

    if (!code) {
        return res.status(400).send("Code is required");
    }

    try {
        const response = await aiService(code);
        res.send(response);
    } catch (err) {
        res.status(500).send(err.message);
    }
}