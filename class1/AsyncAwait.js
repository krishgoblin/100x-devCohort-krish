function krishAsyncFunc(){
    let p = new Promise(function(reoslve){
        //do some asyn logic
        resolve("bar");
    });
    return p;
}

async function main(){  // await logic only works on async funciton thats y we createa async fun manually.
    const value = await krishAsyncFunc(); // program will wait until promise is received.
    console.log(value);
}

main();