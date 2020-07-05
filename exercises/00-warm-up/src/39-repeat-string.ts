export {};

const repeatString = (s:string, n:number) => {
    
    var output:string = "";

    for (var i = 0; i < n; i++) {
        output = output + s;
    }
    return output;
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'
