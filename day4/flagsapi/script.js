const url = "https://restcountries.com/v3.1/all"

// const request = new XMLHttpRequest();
// request.open('GET', url);
// request.send();

// request.onload = function () {
//         let data = JSON.parse(this.responseText);
//     data.forEach(element => {
//         console.log(element.name);
        
//     });
// }
let arrayFlags = [];

fetch(url)
    .then(response => response.json())
    .then(data => data.forEach(element => {
        arrayFlags.push(element.flag);
    }))

console.log("Hello", arrayFlags);
