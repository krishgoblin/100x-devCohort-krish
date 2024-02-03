const express = require("express");
const port = 3001;
const app = express();

function calculatesum(n){
    let a = 0;
    for(let i=0; i<=n; i++){
    a = a+i;
    }
    return a;
}
app.get("/",function(req,res){
    res.send("HEllo this is home page.")
})
app.get("/sum", (req, res)=>{
    // res.send("Hello");
    const n = req.query.n;  //only for .get
    const ans = calculatesum(n);
    res.send(ans.toString());
})

app.listen(port);