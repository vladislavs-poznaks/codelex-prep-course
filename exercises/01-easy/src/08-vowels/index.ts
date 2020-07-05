/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

function vowels(s: string) {
   
    s = s.toLowerCase();
    var vowelCount: number = 0;

    for (var i = 0; i < s.length; i++) {
        if (s.charAt(i) === 'a'
        || s.charAt(i) === 'e' 
        || s.charAt(i) === 'i' 
        || s.charAt(i) ==='o'
        || s.charAt(i) ==='u') {vowelCount++}
    }

    return vowelCount;
}

export { vowels };
