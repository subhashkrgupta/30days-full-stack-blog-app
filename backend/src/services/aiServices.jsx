import OPENAI from "openai";


if (!process.env.GROQ_API_KEY) {
    throw new Error('GROQ_API_KEY environment variable is missing. Add it to your .env file. Get key from https://console.groq.com/keys');
}

const openai = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});

export const generateResponse = async (propmt) =>{
    const response = await openai.chat.completions.create({
       model: "llama3-70b-8192", 
       messages:[
        {
            role:"system" ,
            content:"You are a helpful blog writing assistant."
        },
        {
            role:"user",
            content:propmt
        }
       ]
    })
     return response.choices[0].message.content;
}