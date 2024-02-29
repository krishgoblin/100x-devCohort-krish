const url = "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_YfmonjzbxyOb3LpGMRg51yEir5D2JBy4JYYMagJSYo7vhOCcnuiXREzq50fKVoyB"

// let promise = fetch(url);

// console.log(promise);

// promise.then((res)=>{
//     console.log(res);
// })

// let body = document.querySelector("body");

const getcat = (async() => {
    console.log("Getting data ...");
    const response = await fetch(url);
    console.log(response);     //fetch(url,[options])  send GET request
    console.log("Hello world");
    //to make the data usefull we use .json() method
    let data = await response.json();
    console.log(data[0]);
    let imgurl = data[0].url;
    document.getElementById("cat").src = `${imgurl}`;
})();    //use of  iife

// (async = ()=>{})();