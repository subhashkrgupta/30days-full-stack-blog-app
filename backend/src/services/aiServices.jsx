import OPENAI from "openai";


const openai = new OPENAI({
    apikey : process.env.GROQ_API_KEY,
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