// Middleware for handling auth

const jwt = require('jsonwebtoken');
const{ JWT_SECRET }= require('../config');


function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwt_token = words[1];
    const decodedValue = jwt.verify(jwt_token, JWT_SECRET);

    try{
        if(decodedValue.username){
            req.username = decodedValue.username;
            next();
        }else{
            res.status(403).json({msg:"You are not authenticated"});
        }
    }catch(e){
        console.log(e);
        res.json({msg:"wrong inputs"});
    }
    

}

module.exports = adminMiddleware;