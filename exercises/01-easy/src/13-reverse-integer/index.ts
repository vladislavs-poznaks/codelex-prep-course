/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

function reverse(int: number) {

    while (int % 10 === 0) {int = int / 10}

    var s: string = int.toString();
    var result: string = "";

    for (var i = 0; i < s.length; i++) {
        result = result.concat(s.substr((s.length - i - 1), 1));
    }

    if (int < 0) {
        return - parseInt(result);
    } else {
        return parseInt(result);
    }
    
}

export { reverse };
