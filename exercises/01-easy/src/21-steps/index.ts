/**
 * Steps
 *
 * Write a function that accepts a positive number N.
 * The function should prints a step shape
 * with N levels using the '#' character.
 *
 * Examples:
 * steps(2) = '# '
 *            '##'
 *
 * steps(3) = '#  '
 *            '## '
 *            '###'
 *
 * steps(4) = '#   '
 *            '##  '
 *            '### '
 *            '####'
 */

function steps(n: number) {
    if (n <= 0) {
        //console.log("Error detected!");
        throw 'Only positive numbers are allowed';
    }

    for (var row = 0; row < n; row++) {
        let level: string = '';

        for (var col = 0; col < n; col++) {
            if (col <= row) {
                level += '#';
            } else {
                level += ' ';
            }
        }

        console.log(level);

    }
}

export { steps };
