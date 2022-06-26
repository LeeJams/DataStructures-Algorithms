/* 
Given an array of integers and a number, write a function called maxSubarraySum,
which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array.
In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

정수와 숫자의 배열이 주어지면 maxSubArraySum이라고 불리는 함수를 쓴다.
이것은 함수에 전달된 수의 길이와 함께 하위 배열의 최대 합을 구합니다.

하위 배열은 원래 배열의 연속적인 요소로 구성되어야 합니다.
아래 첫 번째 예에서 [100, 200, 300]은 원래 배열의 하위 배열이지만 [100, 300]은 그렇지 않습니다.

Time Complexity: O(n)
*/
function maxSubArraySum(arr, num) {
  if (arr.length < num) return null;
  let pairSum = 0;
  for (let i = 0; i < num; i++) {
    pairSum += arr[i];
  }
  let maxNum = pairSum;
  for (let i = num; i < arr.length; i++) {
    maxNum += arr[i] - arr[i - num];
    pairSum = Math.max(maxNum, pairSum);
  }
  return pairSum;
}

console.log(maxSubArraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubArraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubArraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubArraySum([2, 3], 3)); // null
