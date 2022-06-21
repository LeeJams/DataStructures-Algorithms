/* 
Given a sorted array of integers, write a function called search, 
that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1

정렬된 정수 배열을 지정하면, 값을 받아들이고 함수에 전달된 값이 위치한 인덱스를 반환하는 검색이라는 함수를 작성합니다. 
값을 찾을 수 없으면 -1을 반환합니다.
*/

function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}
// Time Complexity O(N)

function search_solution(array, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (currentElement < val) {
      min = middle + 1;
    } else if (currentElement > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}
// Time Complexity - Log(N) - Binary Search!

console.log(search([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)); // -1

console.log(search_solution([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(search_solution([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(search_solution([1, 2, 3, 4, 5, 6], 11)); // -1
