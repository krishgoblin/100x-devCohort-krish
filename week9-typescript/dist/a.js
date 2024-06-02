"use strict";
const x = 10;
console.log(x);
function sum(a, b) {
    return a + b;
}
function greet(firstname) {
    console.log("Hello " + firstname);
}
function delayedCall(fn) {
    setTimeout(fn, 1000);
}
// Example Usage
delayedCall(function () {
    console.log("hi there");
});
