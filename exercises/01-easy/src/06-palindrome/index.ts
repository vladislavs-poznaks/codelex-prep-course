/**
 * Palindrome
 *
 * For given string return true if the string is a palindrome
 * or false if it is not.
 *
 * Palindromes are strings that form the same word if it is reversed.
 * Include spaces and punctuation in determining if the string
 * is a palindrome.
 *
 * Examples:
 * palindrome("abba") === true
 * palindrome("abcdefg") === false
 */

function palindrome(str: string) {

    var halfLength: number = 0;
    if (str.length % 2 === 0) {
        halfLength = str.length / 2;
    } else {
        halfLength = (str.length - 1) / 2;
    }

    var isPalindrome: boolean = true;

    //console.log("Passed string is: " + str);
    for (var i = 0; i < halfLength; i++) {
        if (str.charAt(i) !== str.charAt(str.length - i - 1)) {isPalindrome = false}
        
        //console.log("i: " + i + ", char at i: " + str.charAt(i) + " and char at "
        // + (str.length - i) + " is " + str.charAt(str.length - i));
    }

    return isPalindrome;
}

export { palindrome };
