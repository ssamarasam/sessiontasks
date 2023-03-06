let arr = [1, 2, 3, 87, 92, 98, 100, 123, 421];
let sum = 0;


(() => {
    sum = arr.reduce((acc, element) => acc + element);
})();

console.log(sum);