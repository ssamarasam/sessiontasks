let input = [ 3, 31, 87, 92, 98, 100, 123, 421, 13];



const prime = (arr) => {
    let output = [];
    for(let i=0; i<arr.length; i++) {
        let prime = true;
        for(let j=2; j<arr[i]; j++) {
            if(arr[i] % j === 0) {
                prime = false;
            } 
        }
        if(prime === true) {
            output.push(arr[i]);
        }
    }
    return output;
}


console.log(prime(input));