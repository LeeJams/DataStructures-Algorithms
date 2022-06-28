/* 
Write a function called binarSearch which accepts a sorted array and a value and returns the index at which the value exists.
Otherwise, return -1.

This algorithm should be more efficient than linearSearch - you can red how to implement it here
https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search
*/

function binarySearch(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (left <= right && arr[middle] !== num) {
    if (num < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    middle = Math.floor((left + right) / 2);
  }
  if (arr[middle] === num) {
    return middle;
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
