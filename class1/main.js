//how to declare variables
let firstname = "krish";  //string
let age = 18;          //number or int
let ismarried = false;      // Boolean


//if else statments
if(ismarried == true){
    console.log(firstname+ " is married");
}else{
    console.log(firstname+" is not married");
}

//print out
console.log("Hi my name is " + firstname + ". My age is "+ age);


//for loop
for(let i = 0; i<4 ; i++){
    console.log("Hello, "+firstname);
}

let sum=0;
for(let i=0; i<=100; i++){
    sum += i;
}
console.log("Sum: "+sum);

//arrays
const persons =["krish", "mihir", "vedeya"];
for(let i=0; i < persons.length; i++){
    console.log(persons[i]);
}



const personArray = ["Krish", "Vedeya", "Aishani", "Mihir"];
const genderArray = ["male", "Female", "Female", "male"]

for(let i = 0; i<personArray.length; i++){
    if(genderArray[i]=="Female"){
        console.log(personArray[i] + " is Female");
    }
    else{
        console.log(personArray[i] + " is Male");
    }
}

//objects

const user1 ={
    firstname: "Krish",
    gender: "Male"
}

console.log(user1.firstname + " is " + user1.gender);

//array of objects

const allusers = [
    {
        firstname: "krish",
        gender: "Male"
    }, {
        firstname: "Mihir",
        gender: "Female"
    }
];

console.log(allusers[1].firstname + " is " + allusers[1].gender);


//functions
function findsum(a ,b){
    return a+b;
}

const value = findsum(3, 4);
console.log("Sum: "+ value);


//callback function - cuz you are entering a function as a parameter in another function call.
function calculateArithmetic(a,b,arithematicfun){
    const ans = arithematicfun(a,b);
    return ans;
}

function add(a,b){
    return a+b;
} 

function minus(a,b){
    return a-b;
}

console.log("calculating...." );
console.log("ans: " + calculateArithmetic(3, 4, add));


//set timeout function (predefined)
function greet(){
    console.log("Hello world");
}
//(1000 writen beloww is wating time in milli seconds)
setTimeout(greet, 1000)  // example of a asynchronous function 
console.log("This is waiting time 1");
console.log("This is waiting time 2");
console.log("This is waiting time 3");
//we can perform context switching in JS using async function

//busy waiting (sync function)

// function syncSleep(){
//     let a = 0;
//     for(let i=0; i<1000000; i++){
//         a++;
//     }
// }


//filesystem
const fs = require('fs');
//path, encoding, anonymous function
fs.readFile("a.txt", "utf8", function(err, data){
    console.log(data);
}); // this is also a async function

console.log("Hi There!");


//--Promises-- are syntactical sugar that make code slightly more readable
//creating our own asyn function
//this an actually a ugly way cuz we are 
//creating a wrapper around the asyn function in this case it is on read file function

function krishReadFile(cb){
    fs.readFile("a.txt", "utf-8", function(err, data){
        cb(data);
    });
}   

function onDone(data){
    console.log(data)
}

krishReadFile(onDone);

//prettier way using promises
//promises have three states pending, resolved, and rejected

// syntax of promise{cux it's a class}

var d = new Promise(function(resolve){
    resolve("foo");
})

function callback(){
    console.log(d);
}

d.then(callback); 

//actual promise
function kiratAsyncFunc(){
    let p = new Promise(function(resolve){
        resolve("kirat");
    });
    return p;
}

function main(){
    kiratAsyncFunc().then(function(value){
        console.log(value);
    });
}

main();
// this is telling ua that after our promise is being 
//resolved, we should call the function which is specified in the parameters

//asyn await (PromiseFunc)



