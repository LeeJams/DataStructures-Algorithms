/* 
Write a function called minSubArrayLen which accepts two parameters 
- an array of positive integers and a positive integer.
This function should return the minimal length of a contiguous subarray of 
which the sum is greater than or equal to the integer passed to the function. 
If there isn't one, return 0 instead.

양의 정수 배열과 양의 정수를 허용하는 minSubArrayLen이라는 함수를 작성합니다.
이 함수는 다음과 같은 하위 배열의 최소 길이를 반환해야 합니다.
이 합은 함수에 전달된 정수보다 크거나 같습니다.
없으면 대신 0을 반환합니다.

Time Complexity: O(n)
Space Complexity: O(1)
*/
function minSubarrayLen() {
  // add whatever parameters you deem necessary - good luck!
}

console.log(minSubarrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4, 3] is the smallest subarray
console.log(minSubarrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5, 4] is the smallest subarray
console.log(minSubarrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater then 52
console.log(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubarrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
