const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect("mongodb+srv://admin:Skrish_73@cluster0.88idb2s.mongodb.net/usernew")

const User = mongoose.model("Users", {
  name: String,
  username: String,
  pasword: String,
});

const app = express();
app.use(express.json());

async function userExists(username, password) {
  try {
    const data = await User.findOne({ username: username });
    if(data) return true;
    else return false
    } catch (err) {
    console.error(err);
    return res.status(403).json({
      msg:"Some error occured."
    }); // Handle errors appropriately
    }
}

app.post("/signup", async function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    if(userExists(username, password)){
      const user = new User({
        name:name,
        username:username,
        password:password,
      })
      user.save();
      return res.json({
          msg: "User created."
      });
        
    }else{
      return res.json({
        msg: "User already exists."
    });
    }
})

app.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, "shhhhh");
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username from the database
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000);