const express = require('express');
const port = 3000;
const app = express();


app.get('/health-checkup', function(req, res){
    const username = req.header.username;
    const pass = req.header.pass;
    const kidneyID = req.query.kidneyID;
    
    if(username != "krish73" || pass != "69"){
        res.status(400).json({msg:"Incorrect credentials"});
        return;
    }
    if(kidneyID != "1" && kidneyID != "2"){
        res.status(400).json({msg:"Incorrect Input"});
        return;
    }

    res.json({msg: "YOur kidney is fine."});
    // console.log("HOLAA!!")   this statement will be logged into our terminal locally whenever a request is made by the user.
})

app.listen(port);