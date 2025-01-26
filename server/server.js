const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

require("dotenv").config();

app.use(cors());
app.use(express.json());

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.use((req, res, next) => {
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
    next();
  });


  app.post("/api/ask", async (req, res) => {
    const userPrompt = req.body.prompt;

    if (!userPrompt) {
        return res.status(400).json({ error: "Prompt need" });
    }

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(userPrompt);

        res.json({ response: result.response.text() });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ error: "Something wrong" });
    }
});

  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});