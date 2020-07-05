/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */

function anagrams(stringA: string, stringB: string) {

    stringA = stringA.replace(/[^0-9a-z]/gi, '').toLowerCase();
    stringB = stringB.replace(/[^0-9a-z]/gi, '').toLowerCase();

    if (stringA.length !== stringB.length || stringA === null || stringB === null) {return false;}

    var checkChar = '';
    var charCount = 0;

    for (var i = 0; i < stringA.length; i++) {

        checkChar = stringA.charAt(i);
        charCount = 0;

        for (var m = 0; m < stringA.length; m++) {
            if (checkChar === stringA.charAt(m)) {charCount++}
        }

        for (var n = 0; n < stringB.length; n++) {
            if (checkChar === stringB.charAt(n)) {charCount--}
        }

        if (charCount !== 0 ) {return false;}

    }

    return true;
}

export { anagrams };
