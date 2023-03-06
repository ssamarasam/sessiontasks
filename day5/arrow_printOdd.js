let input = [1, 2, 3, 87, 92, 98, 100, 123, 421];

const odd = (arr) => {
    for(let i of arr) {
        if(i % 2 != 0) {
            console.log(i);
        }
    }
}

odd(input);
