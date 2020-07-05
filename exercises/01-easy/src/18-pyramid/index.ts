/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */

function pyramid(n: number) {
    
    const midPoint = Math.floor((2 * n - 1) / 2);

    for (var row = 0; row < n; row++) {
        let level = '';

        for (var col = 0; col < n * 2 - 1; col++) {
            if (midPoint - row <= col && midPoint + row >= col) {
                level += '#';
            } else {
                level += ' ';
            }
        }
        console.log(level);
    }

}

export { pyramid };
