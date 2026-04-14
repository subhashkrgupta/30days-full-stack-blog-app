

export const chat = async (req,res)=>{
    try {
        const {message} = req.body; 
        if(!message){
            return res.status(400).json({
                success:false,


                message:"Message is required"
            })
        }
        const response = await generateResponse(message);
        return res.status(200).json({
            success:true,
            message:response
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Failed to generate response",
            error:error.message
        })
    }
}