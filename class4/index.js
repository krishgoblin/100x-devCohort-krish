function PrintName(){

    const fname = document.querySelector("#fname").value;
    const lname = document.querySelector("#lname").value;
    const name1 = document.querySelector("#div1");

    console.log(name1);
    console.log(fname);
    console.log(lname);
    
    name1.innerHTML="I am "+ fname +" "+ lname;
}
