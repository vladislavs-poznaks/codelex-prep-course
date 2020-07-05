export {};

function draw(n: number) {
    
    var i;
    var j;
    for (i = 1; i < n + 1; i++) {
        
        var s = "";
        for (j = 1; j < i + 1; j++){
            // Vai ir kas līdzīgs Java write un writeln?!
            s = s + "*";
        }
        console.log(s);
    }

    console.log();
}

draw(3);
/* Expected output:

    *
    **
    ***

*/

draw(5);
/* Expected output:

    *
    **
    ***
    ****
    *****

*/
