import jwt  from "jsonwebtoken"

const userMiddleware = async(req, res)=>{
    try{
        // sign IN user token (.../api/user/login)
        const token = req.header;
        // decode the token with secret key and pass to next function
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        req.body.userId = decode.id;
        next();
    }
    catch(err){
        console.error(`ERROR-Auth: ${err.message}`)
        res.status(404).jason({
            success: false,
            data: `ERROR-Auth: ${err.message}`
        })
    }
}