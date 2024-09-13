import validator from "validator";
import userModel from "../models/userModel";
import bcrypt from 'bcrypt'
import { jwt } from "jsonwebtoken";



// --------------- user Login -----------------
const loginUser = async(req, res)=>{
    const {email, password} = req.body;

    try{
        //check if email exisit in db
        const user = await userModel.findOne({email})

        //check if password matched
        const isMatch = await bcrypt.compare(password, user.password);

        //display for Invalid cedentials
        if (!user || !isMatch){
           res.status(404).json({
            success: false,
            message: "Invalid credentials"
           })
        }

        //if all looks good display TOKEN
        const token = createToken(user._id);
        res.status(200).json({
            success: false,
            message: token 
        })
    }
    catch(err){
        res.status(404).json({success:false, message:"Login Error"})
    }

};

// ------------- TOKEN function -----------------
const createToken = (id)=>{
    const token = jwt.sign(id, process.env.JWT_SECRET);
    return token;
}

// --------------- userSignUP -----------------
const registerUser = async (req, res)=>{
    const {name,email,password} = req.body;

    try{

        //find if entered email already exisit
        const emailExist = await userModel.findOne({email});
        if(emailExist){res.status(301).json({success:false, message:"User already exist!"})}

        //validate the email str.
        if(!validator.isEmail(email)){
            res.status(403).json({success:false, message:"Invalid Email!"})
        }

        //password-length check
        if(password.length < 8){
            res.status(402).json({success:false, message:"Enter a string password"})
        }

        //now if email also unique, email is valid and password is also > 8, then create user with 'hashed-password'

        // generate salt for hash
        const salt = await bcrypt.genSalt(10);
        //genrate hash
        const hashedPassword = await bcrypt.hash(password, salt);

        // create db
        const user = await userModel.create({
            name, email, password:hashedPassword
        })

        // create token
        const token = createToken(user._id);

        //pass the token for further use
        res.status(200).json({success:true, message:token})
        
    }
    catch(err){
        res.status(404).json({
            success: false,
            message: "Error in user Signup"
        })
    }


};

export {loginUser, registerUser};