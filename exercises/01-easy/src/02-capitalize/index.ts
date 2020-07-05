/**
 * Capitalize
 *
 * Write a function that accepts a string. The function should
 * capitalize the first letter of each word in the string then
 * return the capitalized string.
 *
 * Examples:
 * capitalize('a short sentence') === 'A Short Sentence'
 * capitalize('a lazy fox') === 'A Lazy Fox'
 * capitalize('look, it is working!') === 'Look, It Is Working!'
 */

function capitalize(str: string) {
    var words = str.split(/[^a-z']/i);
    var wordsCapital = [];
    var output: string = str;
    
    for (var i = 0; i < words.length; i++) {
        
        wordsCapital[i] = words[i].substr(0,1).toUpperCase().concat(words[i].substr(1,words[i].length - 1));
        //console.log(wordsCapital[i]);
        output = output.replace(words[i], wordsCapital[i]);
    }

    return output;

}

export { capitalize };
