const service = require("../services/ImageGenerate.service");

module.exports.getImage = async (req, res) => {
    const text = req.body.text; // Get prompt from post body

    if (!text) {
        return res.status(400).send("text is required");
    }

    try {
        const imageUrls = await service(text);
        
        // Replicate typically returns an array of image URLs
        if (Array.isArray(imageUrls) && imageUrls.length > 0) {
            res.json({ images: imageUrls });
        } else if (typeof imageUrls === 'string') {
            // If it returns a single URL as string
            res.json({ images: [imageUrls] });
        } else {
            // Send whatever we got
            res.json({ result: imageUrls });
        }
    } catch (err) {
        console.error("Error generating image:", err.message);
        res.status(500).send(err.message);
    }
}