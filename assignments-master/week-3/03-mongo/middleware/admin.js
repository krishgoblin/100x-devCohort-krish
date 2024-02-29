const { Admin } = require('../db');

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;

    const response = await Admin.findOne({
        username,  //it works until the key valur pairs are same if not then {username: username}
        password
    });
    if(response){
        next();
    }else{
        res.status(404).json({msg:"Admin not found"});
    }
}

module.exports = adminMiddleware;