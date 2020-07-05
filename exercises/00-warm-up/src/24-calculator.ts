export {};

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function sum(arr) {
    var sum = 0;
    var i;
    for (i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return sum;
}

function multiply(arr) {
    var mult = 1;
    var i;
    for (i = 0; i < arr.length; i++) {
        mult = mult * arr[i];
    }

    return mult;
}

function power(a, b) {
    return Math.pow(a, b);
}

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8
