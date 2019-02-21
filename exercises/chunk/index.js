// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let bigArr = [];
  let slicer = 0;
  for(let ind in array){
    if( (parseInt(ind) === 0) || (parseInt(ind) % size === 0)){
      let newArr = array.slice(parseInt(ind), parseInt(ind) + size);
      bigArr.push(newArr);
    }
  }
  return bigArr;
}

module.exports = chunk;
// First Solution
// function chunk(array, size) {
//   let arr = [];
//   let bigArr = [];
//
//   for(let single of array){
//     arr.push(single);
//     if(single % size === 0){
//       bigArr.push(arr);
//       arr = [];
//     }
//   }
//   if(arr.length < size && arr.length > 0){
//     bigArr.push(arr)
//   }
//   return bigArr;
// }
