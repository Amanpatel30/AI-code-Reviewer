const express = require('express');
const cors = require("cors")


const app = express();
const GeminiAiRoutes = require("./routes/Gemini.ai.route");
const DeepseekAiRoutes = require("./routes/Deepseek.ai.route");
const HuggingFaceRoutes = require("./routes/ImageGenerate.route");

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true })); 


app.get("/",(req,res)=>{
    res.send("Hello world")
})


app.use("/GeminiAi",GeminiAiRoutes);
app.use("/DeepseekAi",DeepseekAiRoutes);
app.use("/ImageGenerate",HuggingFaceRoutes);





module.exports =  app;