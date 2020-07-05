export {};

/**
 * Create a function protectEmail which hides some symbols of the email
 */
function protectEmail (s:string) {
    var userLength:number = 0;

    /**
    for (var i = 0; i < s.length; i++) {
        if (s.charAt(i) == '@') {
            return s.slice(0,3).concat("...").concat(s.slice(i,s.length));
        }
    }
    */

    var i:number = 0;
    while (s.charAt(i) != '@') {
        i++;
    }
    return s.slice(0,3).concat("...").concat(s.slice(i,s.length));
    
}

console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com
