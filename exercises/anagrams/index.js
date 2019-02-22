// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let objA = {};
  let objB = {};
  for(let single of stringA.toLowerCase().split("")){
  objA[single] = objA[single] ? (objA[single] + 1) : 1;
  }
  for(let single of stringB.toLowerCase().split("")){
  objB[single] = objB[single] ? (objB[single] + 1) : 1;
  }

  console.log(objA, objB);
  console.log("askdjabsk akscbskjndsak asjcnkasjcnk");
  for(let a in objA){
  if(!(Object.keys(objB).indexOf(a) && (objA[a] === objB[a]))){
    return false
  }
  }
  return true

}

module.exports = anagrams;
