/**
 * Matrix
 * Given a string representing a matrix of numbers, return the rows and columns of that matrix.
 *
 * So given a string with embedded newlines like:
 *
 *     9 8 7
 *     5 3 2
 *     6 6 7
 *
 * representing this matrix:
 *
 *         1  2  3
 *       |---------
 *     1 | 9  8  7
 *     2 | 5  3  2
 *     3 | 6  6  7
 *
 * your code should be able to spit out:
 *
 * A list of the rows, reading each row left-to-right while moving top-to-bottom across the rows,
 * A list of the columns, reading each column top-to-bottom while moving from left-to-right.
 *
 * The rows for our example matrix:
 *
 *     9, 8, 7
 *     5, 3, 2
 *     6, 6, 7
 *
 * And its columns:
 *
 *     9, 5, 6
 *     8, 3, 6
 *     7, 2, 7
 */

class Matrix {
  constructor(private matrix: string) {}
  
  


  get rows() {
    let lines: string[] = this.matrix
      .trim()
      .split(/[\r\n]+/);
    
    let rowsStrings: string[][] = [];
    let rowNumbers: number[] = []
    let rowsNumbers = [];

    for (let i = 0; i < lines.length; i++) {
      for (let x = 0; x < lines[i].length; x++) {
        rowsStrings[i] = lines[i].split(/[ ]/);
      }
    }

    for (let i = 0; i < rowsStrings.length; i++) {
      for (let x = 0; x < rowsStrings[i].length; x++) {
        rowNumbers[x] = parseInt(rowsStrings[i][x]);
      }

      //console.log("RowNumbers: " + rowNumbers);
      rowsNumbers[i] = rowNumbers;
    }
    
    //console.log(rowsNumbers);
    return rowsNumbers;
  }

  get columns() {
    return [];
  }
}

export { Matrix };
