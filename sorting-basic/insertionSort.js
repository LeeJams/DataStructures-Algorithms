/* 
Insertion Sort Pseudocode

Start by picking the second element in the array
Now compare the second element with the one before it and swap if necessary.
Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
Repeat until the array is sorted.

배열의 두 번째 요소를 선택하는 것부터 시작합니다.
이제 두 번째 요소를 앞의 요소와 비교하고 필요한 경우 교환합니다.
다음 요소로 계속 진행하여 순서가 잘못된 경우 정렬된 부분(즉, 왼쪽)을 반복하여 요소를 올바른 위치에 배치합니다.
배열을 정렬할 때까지 반복합니다.
*/

function insertionSort(arr) {
  var currentVal;
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([1, 51, 55, 8, 123, 64, 5, 15])); // [1, 5, 8, 15, 51, 55, 64, 123]
console.log(insertionSort([37, 45, 29, 8]));
console.log(insertionSort([8, 1, 2, 3, 4, 5, 6, 7]));
