console.log("Hello world!");

setTimeout(function(){
    console.log("Hello world! after setTimeout!");
}, 500); // this function will do its work in a different thread. Even if it's ready with the o/p
//it will not be called until the current thread is free which in this case is busy calculationg for loop.
//so it'll be only after for loop that setTimeout will print. 

let a=0;
for(let i = 0; i <1000000000; i++) {
    a = a + i;
}
console.log("After for loop!");

// approach 1 - wrap around async func. using callbacks

// const fs = require("fs");
// function readthenputCopywrite(cb){
//     fs.readFile("a.txt", "utf-8", function(err,data){
//         data = data + "CoplywriteKrishSharam-2024";
//         fs.writeFile("a.txt", function(){
//             cb();
//         });
//     });
// }

// readthenputCopywrite(function(){
//     console.log("COpywrite added");
//     }
// )

//async function inside another async function can create unnecessary indentation 
//which leads to callback hells.
//promises can fix callback hells.
//Promise is just a class in js

function promisfy(duration){
    const p = new Promise(function(resolve){  //this is just the syntax for promise. promise class needs
        setTimeout(resolve, duration);//a input function by default. and the function's input is 
    });             //resolve which ultimately a callback. So under the hood we are using callbacks only.
    return p;
}

const ans = promisfy(3000);
console.log(ans);
ans.then(function(){
    console.log("timeout is done.")
    console.log(ans);
}); //calling an promise function....Syntax


//Then we also have promise chaining
