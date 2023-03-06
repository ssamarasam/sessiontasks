const palindromeArray = (array) => {
    let output = [];
    for(let i=0; i<array.length; i++) {
        if(array[i] === array[i].split("").reverse().join("")) {
            output.push(array[i]);
        }
    }
    return output;

}

let arr = ['abc', 'aaa', 'xyz', 'aba', 'starats'];
console.log(palindromeArray(arr));