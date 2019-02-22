// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let array = str.split('');
  return array.every( (singleChar, index) =>{
      return singleChar === array[ array.length - (index + 1) ]
  });
}

module.exports = palindrome;

// first Solution
//
// function palindrome(str) {
//   let reversedString = str.split('').reverse().join("");
//   return reversedString === str;
// }

// Bad solution - mezareba tore loop unda gayo 2 ze
// function palindrome(str) {
//   let array = str.split('');
//   return array.every( (singleChar, index) =>{
//       return singleChar === array[ array.length - (index + 1) ]
//   });
// }
