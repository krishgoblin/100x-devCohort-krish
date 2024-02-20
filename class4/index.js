const fname = document.getElementById("name11").value;
const lname = document.getElementById("name22").value;
const name1 = document.getElementById("div1");

console.log(name1);

function PrintName(){
    console.log(fname);
console.log(lname);
    name1.innerHTML="I am "+ fname +" "+ lname;
}
