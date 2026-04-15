

export const chatWithAi = async (req,res) =>{
    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({
                success: false,
                message: "Prompt is required to generate a response"
            });
        }

        const response = await openai.chat.completions.create({
            model:"llama3-70b-8192",
            messages:[
                {
                    role:"system",
                    content:"You are a helpful blog writing assistant."
                },
                {
                    role:"user",
                    content:prompt
                }
            ],
            temperature:0.7,
            max_tokens:1000,
            top_p:1,
            frequency_penalty:0,
            presence_penalty:0
        })
        return res.status(200).json({
            success:true,
            message:"Response generated successfully",
            data:response.choices[0].message.content
        })  
         
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Failed to generate response",
            error:error.message
        })
    }
}