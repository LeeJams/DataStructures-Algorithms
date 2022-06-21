/* 
Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
The function should calculate the maximum sum of n consecutive elements in the array.

정수 배열을 수용하는 maxSubarraySum이라는 함수와 n이라는 숫자를 쓰십시오.
함수는 배열에 있는 n개의 연속된 요소의 최대 합을 계산해야 합니다.
 */
function maxSubarraySum(arr, num) {
  if (arr.length < num) {
    return null;
  }
  let result = 0;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }

    if (temp > result) {
      result = temp;
    }
  }
  return result;
}
// Time Complexity - O(n^2)

function maxSubarraySum_solution(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
// Time Complexity - O(n)
// 계속 새로 숫자를 뽑아서 다 더하는 것이 아니라
// 기존 숫자를 유지한 상태로 앞은 빼고 새로운 숫자를 더하면서 최적화

console.time('my solution')
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null
console.timeEnd('my solution')

console.time('solution')
console.log(maxSubarraySum_solution([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum_solution([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum_solution([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum_solution([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum_solution([], 4)); // null
console.timeEnd('solution')
