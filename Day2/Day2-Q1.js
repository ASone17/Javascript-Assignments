function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}
let result = factorial(3);
console.log(result);