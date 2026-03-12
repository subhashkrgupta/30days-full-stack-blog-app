import { User } from "../models/user.models.js";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { userName, phone, email, password } = req.body;

    if (!userName || !phone || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const existingUser = await User.findOne({
      $or: [{ email }, { userName }]
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists"
      });
    }

    const newUser = await User.create({
      userName,
      email,
      phone,
      password
    });

    const createdUser = await User.findById(newUser._id)
      .select("-password -refreshToken");

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: createdUser
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed registration",
      error: error.message
    });
  }
};


export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // basic validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }
    
    

    // check if user exists
    const existUser = await User.findOne({ email });

    if (!existUser) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    // check password
    const isPasswordCorrect = await existUser.isPasswordCorrect(password);

    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials"
      });
    }
       
    // generate tokens using instance methods
    const accessToken = existUser.generateAccessToken();
    const refreshToken = existUser.generateRefreshToken();


    console.log(accessToken)
    // save refresh token in DB
    existUser.refreshToken = refreshToken;
     
    await existUser.save({ validateBeforeSave: false });


  
    const options={
      httpOnly:true,
      secure:true,
      sameSite: "strict",   
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    }
    return res.status(200)
    .cookie("refreshtoken",refreshToken,options)
    .json({
      success: true,
      message: "Login successful",
      accessToken,
      
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Login failed"
    });
  }
};

export const logoutUser = async (req, res) => {
  try {
    // console.log("Logout request:", {
    //   body: req.body,
    //   cookies: req.cookies
    // });

    // token from body OR cookie
    const refreshToken = req.body?.refreshToken || req.cookies?.refreshtoken;

    if (!refreshToken) {
      return res.status(400).json({
        success: false,
        message: "Unauthorized"
      });
    }

    // try to remove refreshToken from DB (no error even if user not found)
    await User.updateOne(
      { refreshToken },
      { $unset: { refreshToken: "" } }
    );

    // clear cookie and respond success
    return res
      .status(200)
      .clearCookie("refreshtoken")
      .json({
        success: true,
        message: "Logout successfully"
      });
  } catch (error) {
    console.error("Logout error:", error);
    return res.status(500).json({
      success: false,
      message: "Logout failed"
    });
  }
};


export const refreshAccessToken  = async (req , res)=>{
  try {
    const imcomingRefreshToken = req.cookie.refreshToken || req.body.refreshToken;

    if(!imcomingRefreshToken){
      return res.status(401).json({
        success:false,
        message:"Refresh token not found"
      });
    };

    //verify refresh token
    const decodedToken= jwt.verify(
      imcomingRefreshToken,
      process.env.REFRESH_TOKEN
    );

    const user = await User.findById(decodedToken._id);
    if(!user){
      return res.status(401).json({
        success:false,
        message:"Invalid refrseh token"
      })
    }

    //generate new access toekn
    const newAccessToken= user.generateAccessToken();
    return res.status(200).json({
      success:true,
      accessToken:newAccessToken,
    });

  } catch (error) {
     return res.status(401).json({
      success:false,
      message:"Invalid or expired refrseh token"
     })
  }
}

export const getCurrentUser = async (req, res) => {
  try {

    const user = await User.findById(req.user.id).select("-password");

    res.status(200).json({
      success: true,
      user
    });

  } catch (error) {
    res.status(500).json({
      message: "User not found"
    });
  }
};