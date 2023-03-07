const inputURL = "https://restcountries.com/v3.1/all";
let list = document.getElementById('myList');

// const request = new XMLHttpRequest();
// request.onload = function() {
//     // console.log(JSON.parse(this.responseText));
//     const data = JSON.parse(this.responseText)
//     data.forEach((element) => {
//         let li = document.createElement('li');
//         li.innerText = element.flag + ' ' + element.name['common'] ;
//         list.appendChild(li);
//     })
// }

// request.open('GET', inputURL)
// request.send();


function IOoperation(method, url, body = '', cb = (data) => {}) {
    const request = new XMLHttpRequest();
    request.open(method, url);


    if(method === 'GET') {
        request.send();
    } else {
        request.send(body)
    }

    request.onload = function() {
        cb(JSON.parse(this.responseText));
    }
}

function displayData(data) {
    // console.log(data);
        data.forEach((element) => {
            // console.log(element.name['common']);
        let li = document.createElement('li');
        li.innerText = element.flag + ' ' + element.name['common'] ;
        list.appendChild(li);
    })
}

IOoperation('GET', inputURL, null, displayData);