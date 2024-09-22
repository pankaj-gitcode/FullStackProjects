import validator from "validator";
import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt  from "jsonwebtoken";



// --------------- user Login -----------------
const loginUser = async(req, res)=>{
    const {email, password} = req.body;

    try{
        //check if 'email' exisit in db
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(403).json({success:false, message:"Invalid username"})
        }

        //check if 'password' matched
        const isMatch = await bcrypt.compare(password, user.password);

        //display for Invalid cedentials
        if (!isMatch){
           return res.status(404).json({
            success: false,
            message: "Invalid credentials"
           })
        }

        //if all looks good display TOKEN
        const token = createToken(user._id);
        res.status(200).json({
            success: true,
            message: token 
        })
    }
    catch(err){
        res.status(404).json({success:false, message:`ERROR-LOGIN: ${err.message}`})
    }

};

// ------------- TOKEN function -----------------
const createToken = (id)=>{
    const secretToken = jwt.sign({id}, process.env.JWT_SECRET);
    return secretToken;
}

// --------------- userSignUP -----------------
const registerUser = async (req, res)=>{
    const {name,email,password} = req.body;
    

    try{

        //validate the email str.
        if(!validator.isEmail(email)){
            return res.status(400).json({success:false, message:"Invalid Email!"})
        }
        // find if entered email already exist
        const emailExist = await userModel.findOne({ email });
        if(emailExist){return res.status(409).json({success:false, message:"User already exist!"}); }


        // password-length check
        if(password.length < 8){
            return res.status(400).json({success:false, message:"Enter a strong password"})
        }

        //now if email is unique, email is valid and password is also > 8, then create user with 'hashed-password'

        // generate salt for hash
        const salt = await bcrypt.genSalt(10);
        //generate hash
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
        res.status(500).json({
            success: false,
            message: `ERROR-SIGNUP: ${err.message}`
        })
    }


};

export {loginUser, registerUser};