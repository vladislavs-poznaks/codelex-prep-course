export {};

/**
 * Implement map function which works similarly as https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */

//Kāpēc šis ir vajadzīgs?!
const map = (inputNum, inputFunc) => {
    
    let outputNum: number[] = [];
    for (let i =0; i < inputNum.length; i++){
        outputNum[i] = inputFunc(inputNum[i]);
    }
    
    return outputNum;
};

const numbers = [1, 2, 3];
//const doubled = numbers.map(number => number * 2);
const doubled = map(numbers, function(number) {
    return number * 2;
  });
console.log(doubled); // Expected result: [2, 4, 6]
