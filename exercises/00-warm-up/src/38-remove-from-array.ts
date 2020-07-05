export {};

const removeFromArray = function(arr, a:number, b?:number) { 
    
    for (var i = 0; i < arr.length; i++) {
        if (arr [i] == a || arr[i] == b) {
            arr.splice(i, 1);
        }
    }
    return arr;
};

console.log(removeFromArray([1, 2, 3, 4], 3)); // Expected output: [1, 2, 4]
console.log(removeFromArray([1, 2, 3, 4], 7)); // Expected output: [1, 2, 3, 4]
console.log(removeFromArray([1, 2, 3, 4], 7, 2)); // Expected output: [1, 3, 4]
