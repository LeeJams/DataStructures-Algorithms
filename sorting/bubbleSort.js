/* 
Start looping from with a variable called i the end of the array towards the beginning.
Start an inner loop with a variable called j from the beginning until i - 1.
If arr[j] is greater than arr[j + 1], swap those two values.
Return the sorted array.
*/

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    let noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

// console.log(bubbleSort([1, 51, 55, 8, 123, 64, 5, 15])); // [1, 5, 8, 15, 51, 55, 64, 123]
// console.log(bubbleSort([37, 45, 29, 8]));
console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
