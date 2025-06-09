
require('dotenv').config();
const axios = require('axios');
const fs = require('fs');

const API_KEY = process.env.STABILITY_API_KEY;



async function generateImage(prompt) {
  const PROMPT = prompt;
  const payload = {
    cfg_scale: 7,
    height: 512,
    width: 512,
    steps: 30,
    samples: 1,
    text_prompts: [{
      text: PROMPT,
      weight: 1
    }]
  };

  axios.post(
    'https://api.stability.ai/v1/generation/stable-diffusion-v1-6/text-to-image',
    payload, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'image/png', // ✅ REQUIRED
        'Authorization': `Bearer ${API_KEY}`
      },
      responseType: 'arraybuffer'
    }
  ).then((response) => {
    const outputPath = '../frontend/public/output.png';
    fs.writeFileSync(outputPath, response.data);
    console.log(`🖼️ Image generated and saved as: ${outputPath}`);
    return outputPath;

  }).catch((error) => {
    if (error.response && error.response.data) {
      const errorText = Buffer.from(error.response.data).toString('utf8');
      console.error("❌ API Error Response:", errorText);
    } else {
      console.error("❌ Error:", error.message);
    }
  });
}
// generateImage("fish")
module.exports = generateImage