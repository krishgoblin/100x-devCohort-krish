const { JWT_SECRET } = require("../config");
const jwt = require('jsonwebtoken');

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwt_token = words[1];
    const decodedValue = jwt.verify(jwt_token, JWT_SECRET);
    console.log(decodedValue);

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

module.exports = userMiddleware;