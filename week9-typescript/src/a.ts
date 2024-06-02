const x: number = 10;
console.log(x);


function sum(a:number, b:number) :number { //also specify what it is returing
    return a+b;
}

function greet(firstname : string){
    console.log("Hello " + firstname);
}

function delayedCall(fn: () => void): void {
    setTimeout(fn, 1000);
}

// Example Usage
delayedCall(function() {
    console.log("hi there");
});