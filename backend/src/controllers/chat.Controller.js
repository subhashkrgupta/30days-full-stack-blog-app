import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1", // Ye line Groq ke liye mandatory hai
});

export const chatWithAi = async (req, res) => {
    try {
        const { prompt } = req.body;
        
        const response = await openai.chat.completions.create({
            model: "llama-3.3-70b-versatile", 
            messages: [
                { role: "system", content: "You are a helpful assistant to write a blog you are a professional blog writer so write blog posts." },
                { role: "user", content: prompt }
            ],
        });

        res.status(200).json({
            success: true,
            data: response.choices[0].message.content
        });
    } catch (error) {
        console.error("Groq Error:", error);
        res.status(500).json({ success: false, error: error.message });
    }
};