export {};

/**
 * Write a function that removes an element from array.
 * The function must:
 *  - NOT change the original array
 *  - return a new array with the first item matching `valueToRemove` removed
 */

// You are allowed to edit only this function
function remove(arr, valueToRemove) {
  let filtered = arr;
  filtered.splice(filtered.indexOf(valueToRemove),1);
  return filtered;
}

const numbers = [1, 2, 3];
const names = ["John", "Alice", "Ellen"];

const newNumbers = remove(numbers, 2);
const newNames = remove(names, "Ellen");

console.log(newNumbers);
console.log(newNames);

// ! VECIE MASĪVI ARĪ TIEK PĀRVEIDOTAS
//console.log(numbers);
//console.log(names);

/* 
  Expected output:
  
      [1, 3]
      [John, Alice]
*/
