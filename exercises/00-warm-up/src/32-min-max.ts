export {};

const min = array => {
    var min:number = array[0];

    for (var i = 1; i < array.length; i++) {
        if (array[i] < min) {min = array[i]}
    }

    return min;
};

const max = array => {
    var max:number = array[0];

    for (var i = 1; i < array.length; i++) {
        if (array[i] > max) {max = array[i]}
    }

    return max;
};

console.log(min([1, 2, 3, 4, 5])); // Expected output: 1
console.log(min([9, -3, 6])); // Expected output: -3
console.log(max([1, 2, 3, 4, 5])); // Expected output: 5
console.log(max([9, -3, 6])); // Expected output: 9
