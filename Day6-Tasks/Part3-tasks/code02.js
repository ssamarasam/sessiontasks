// Fix the code to Sum of the digits present in the number

// Code:

let n = 123;
console.log(add(n));


function add(n) {
    let sum = 0;
    let nArr = n.toString().split("");
    console.log(nArr);
    for(var i=0; i<nArr.length; i++){
    sum += +nArr[i]
    }
    return sum;
}