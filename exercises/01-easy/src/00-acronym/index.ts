/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string) {
    
    var words = input.split(/[^a-z']/i);
    var acronym:string = "";

    for (var i = 0; i < words.length; i++) {
        acronym = acronym.concat(words[i].substr(0,1).toUpperCase());
    }

    return acronym;
}
export { parse };
