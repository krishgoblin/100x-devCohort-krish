//using Middlewares

const { info } = require("console");
const express = require("express");
const app = express();
const zod = require("zod");
const port = 3000;

const schema = zod.array(zod.number());

const LoginSchema = zod.object({
    email : zod.string().email(),
    pass : zod.string().min(8),
})

app.use(express.json()); //express.json() being a middleware here

var reqcount;

function reqcounter(req, res, next){
    reqcount++;
    console.log(reqcount);
    next();
}

function usernamemiddleware(req, res, next){
    let username = req.header.username;
    let pass = req.header.pass;
    if(username != "krish73" || pass != "69"){
        res.status(400).json({msg:"Incorrect credentials"});
        return;
    }else{
        next();
    }
}

function kidneymiddleware(req, res, next){
    let kidneyID = req.query.kidneyID;
    if(kidneyID != "1" && kidneyID != "2"){
        res.status(400).json({msg:"Incorrect Input"});
        return;
    }else{
        next();
    }
}

app.post("/login", function(req,res){
    const input = req.body;
    const check = LoginSchema.safeParse(input);
    if(!check.success){
        res.send("Credentials are in correct");
        return;
    }
    res.send("Your are logged in.");
})

app.post("/kidney-check", function(req,res){    //we can use middlewares here as well. 
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    // const length = kidneys.length;        //No check

    res.send("Your have" + `${response}`);
})

app.get("using-headers", usernamemiddleware, kidneymiddleware, function(req, res){
    res.json({msg: "YOur kidneys are just fine chill dude.", msg2: "This is me using get method."})
})

// app.use(function(err, req, res, next){    //global catches
//     res.json({msg: "There is some error in our code. Sorry for inconvience."});
// })

app.listen(port);