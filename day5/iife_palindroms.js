let arr = ['abc', 'aaa', 'xyz', 'aba', 'starats'];
let output = [];


// let result = arr[0].split("").reverse().join("");
// console.log(result);

(() => {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === arr[i].split("").reverse().join("")) {
            output.push(arr[i]);
        }
    }
}

)();

console.log(output);