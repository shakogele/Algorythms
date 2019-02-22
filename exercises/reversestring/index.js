// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reduce((reversed, singleCharacter) => singleCharacter + reversed, '');
}

module.exports = reverse;

// first Solution
// function reverse(str) {
//   let newString = "";
//   for(let i=(str.length - 1); i>=0; i--){
//     newString += str[i];
//   }
//   return newString;
// }

// Second Solution
// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// Third Solution
// function reverse(str) {
//   let reversedString = ""
//   for(let singleString of str) {
//     reversedString = singleString + reversedString;
//   }
//   return reversedString;
// }

// Fourth Solution
// function reverse(str) {
//   return str.split("").reduce((reversed, singleCharacter) => { return reversed = singleCharacter + reversed;}, '')
//
// }
