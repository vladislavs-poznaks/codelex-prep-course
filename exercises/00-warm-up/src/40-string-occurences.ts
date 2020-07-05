export {};

const count = (sentence:string, word:string) => {
    let count = 0;
    sentence = sentence.toLowerCase();

    for (var i = 0; i < sentence.length; i++) {
        if (sentence.substr(i, word.length) === word) {count++}
    }
    return count;
};

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1
