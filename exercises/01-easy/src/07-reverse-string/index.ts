/**
 * Reverse String
 *
 * For given string return a new string
 * with the reversed order of characters.
 *
 * Examples:
 * reverse('apple') === 'elppa'
 * reverse('hello') === 'olleh'
 * reverse('Greetings!') === '!sgniteerG'
 */

function reverse(str: string) {
    var reversed: string = "";

    for (var i = str.length - 1; i > -1; i--) {
        reversed = reversed.concat(str.substr(i,1));
    }

    return reversed;
}

export { reverse };
