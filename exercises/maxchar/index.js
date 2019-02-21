// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let arrFromStr = str.split("");
  let arr = {};
  let max = 0;
  let maxChar = '';
  for(let singleChar of arrFromStr){
    arr[singleChar] = (arr[singleChar]) ? (arr[singleChar]+1) : 1;
  }
  for(let char in arr){
    if(arr[char] > max){
      max = arr[char];
      maxChar = char;
    }
  }
  return maxChar;

}

module.exports = maxChar;
