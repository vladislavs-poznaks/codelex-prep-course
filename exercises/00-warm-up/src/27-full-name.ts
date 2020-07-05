export {};

/**
 * Create a function called fullName, which concatenates two strings together
 */
function fullName (a:string, b:string) {
    return a.concat(" ").concat(b);
}

console.log(fullName("John", "Doe")); //Expected output: 'John Doe'
