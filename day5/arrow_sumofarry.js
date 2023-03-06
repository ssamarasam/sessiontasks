let arr = [1, 2, 3, 87, 92, 98, 100, 123, 421];

const sum = (array) => {
    let total = array.reduce((acc, element) =>
        acc + element
    )
    return total;
}

console.log(sum(arr));