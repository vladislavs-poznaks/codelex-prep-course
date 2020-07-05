/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */

class Words {
  count(str: string) {

    let list: object = [];

    function splitStringToWords(s:string): string[] {
      
      let words = str
      .trim()
      .toLowerCase()
      .replace(/[ ]{2,}/gi," ")
      .split(/[ \n\t]/);
      
      return words;
    }

    function createSingleWordList(words:string[]):string[] {
      let outputList: string[] = [];

      for (let i = 0; i < words.length; i++){
        
        let listHasWord = false;
        for (let x = 0; x < outputList.length; x++){
          
          if (words[i] === outputList[x]) {
            listHasWord = true;
          }
        }

        if (!listHasWord) {
          outputList.push(words[i]);
        }
      }

      return outputList;
    }

    let allWordList = splitStringToWords(str);
    let singleWordList = createSingleWordList(allWordList);

  
    singleWordList.forEach(singleWord => {
      
      let count: number = 0;
      allWordList.forEach(word => {
        if (word === singleWord) {
          count++;
        }
      })

      list = Object.assign({ [singleWord]: count}, list);

    });

    return list;
  }
}

export { Words };
