// function sum(a, b){
//     return a+b;
// }
//Arrow func
const sum = (a,b) =>{
    return a+b;
}

const inp = [1, 2, 3, 4, 5];
console.log(inp);
const newarr = [];
for(let i=0; i<inp.length; i++){
    newarr.push(inp[i]*3);
}

console.log(newarr);
//using map
// const transform = i =>{
//     return i*3;
// }
const ans = inp.map(i=>{
    return i*3;
});
console.log(ans);


// filtering
//given an input array give me back even numbers

const x = [1, 2, 3, 4, 5, 6, 7 ,8];
const ans1 = x.filter(n=>{
    if(n%2==0){
        return true;;
    }else{
        return false;
    }
})
console.log(x);
console.log(ans1);