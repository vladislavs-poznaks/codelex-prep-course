/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(str: string) {
    var maxChar = '';
    var maxCount = 0;

    for (var i = 0; i < str.length; i++) {
        
        var ch = str.charAt(i);
        var count = 0;

        for (var j = 0; j < str.length; j++) {
            if (ch === str.charAt(j)) {count++}
        }

        if (count > maxCount) {
            maxCount = count;
            maxChar = ch;
        }

        //console.log("i: " + i + ", maxChar: " + maxChar + ", with count: " + maxCount);

    }

    return maxChar;
}

export { maxChar };
