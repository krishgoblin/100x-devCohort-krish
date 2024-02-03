const express = require("express");
const port = 3000;
const app = express();

const users = [
    {
        name : "john",
        kidneys : [
            {healthy: false},
            {healthy: true}
        ]
    }
]
 
app.use(express.json()) //body parser helps us read the body request

app.get("/", function(req, res){       //to get a consultation from the doctor
    const johnskidney = users[0].kidneys;
    const numberofkidneys = johnskidney.length;
    let healthykidneys = 0;
    let unhealthykidneys = 0;

    for(let i = 0; i < numberofkidneys; i++){
        if(johnskidney[i].healthy){
            healthykidneys++;
        }
        else{
            unhealthykidneys++;
        }
    }

    res.json({
        numberofkidneys,
        healthykidneys,
        unhealthykidneys
    })

})




app.post("/", function(req, res){
    const ishealthy = req.body.ishealthy;  //to read this body request we need something called body parser 
    users[0].kidneys.push({
        healthy : ishealthy
    });

    res.json({
        msg: "DONE!!"
    })
})

app.put("/", function(req, res){
    for(let i = 0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }

    res.json({}) //it is important to send back data in put method otherwise it just won't work 
    //same for delete request
})

app.delete("/", function(req, res){
    if(nobadkidneys()){
        const newkidneys = []
        for(let i = 0; i<users[0].kidneys.length; i++){
            if(users[0].kidneys[i].healthy){
                newkidneys.push({
                    healthy : true
                })
            }
            
        }
        users[0].kidneys = newkidneys;
        res.json({Msg : "Its done!!"})
    }
    else{
        res.status(411).json({
            msg : "No bad kidneys. no need for operation."
        })
    }
    
})

function nobadkidneys(){
    let iskidneybad = false;
    for(let i = 0; i< users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy==false){
            iskidneybad = true
            break
        }
    }
    return iskidneybad
}


app.listen(port);