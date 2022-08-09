import jsonwebtoken from 'jsonwebtoken';
import 'dotenv/config';


const auth = (req, res, next) => {
    const token = req.header('x-auth-token');
    console.log(token);

    if(!token){
        return res.status(401).json({msg : "You are not authorizated to access this resource"});
    }

    try{
        const decoded  = jsonwebtoken.verify(token, process.env.jwtSecret);
        req.user = decoded.user;
        console.log("decoded: ", req.user);
    }catch(error){
        console.log(error);
        res.status(400).json({msg : 'Token is invalid'});
    }
     next();
}
export default auth;