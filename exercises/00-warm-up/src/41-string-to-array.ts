export {};

function stringToArray (sentence:string) {
    let words = sentence.split(/[ ]/);

    return words;
}

console.log(stringToArray("John Doe")); // Expected output: ['John', 'Doe']
