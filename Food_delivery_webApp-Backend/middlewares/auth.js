import jwt  from "jsonwebtoken"

const userMiddleware = async(req, res, next)=>{
    try{
        // sign IN user token (.../api/user/login)
        const {token} = req.headers;
        if(!token){return res.status(404).json({success:false, data:"Not authorized to login!"})}
        // console.log("TOKEN: ",token)

        // decode the token with secret key and pass to next function
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        req.body.userId = decode.id;

        // console.log("DECODER: ", decode)

        
        // console.log(`AUTH: ${[token, req.body.userId]}`)
        next();
    }
    catch(err){
        // console.error(`ERROR-Auth: ${err.message}`)
        res.status(404).json({
            success: false,
            data: `ERROR-Auth: ${err.message}`
        })
    }
}

export default userMiddleware;