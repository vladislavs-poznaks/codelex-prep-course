export {};

/**
 * Implement a function which takes two integers and returns the sum of every number between (inclusive), for example:
 *
 *  For example, 1, 4 will return 1 + 2 + 3 + 4 which is 10
 */

const sumAll = function(a:number, b:number) {
    var sum:number = 0;

    for (var i = a; i < b + 1; i++) {
        sum = sum + i;
    }

    return sum;
};

console.log(sumAll(1, 4)); // Expected output: 10
