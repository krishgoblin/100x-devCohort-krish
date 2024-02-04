console.log("Hello!!");

console.dir(window.document);

document.body.childNodes[1].innertext = "Balle BAlle"

// let id1 = document.getElementById("div1");
// console.dir(id1);

// let headClass = document.getElementsByClassName("headings");
// console.dir(headClass);

// let para = document.getElementsByTagName("p");
// console.log(para);

let heading2 = document.querySelector("h2");
heading2.append(" from krish ki kaksha");

let el = document.createElement("button");
el.innerText = "Click me";
// console.log(el)

document.querySelector(".div2").prepend(el);
// div.prepend(el)

let newbut = document.createElement("button");
newbut.innerText = "Click me";
newbut.style.background = "red";
newbut.style.Color = "White";

let body = document.querySelector("body");
body.prepend(newbut);




