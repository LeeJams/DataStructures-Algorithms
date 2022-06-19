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
  for (let i = 0; i < arr.length; i++) {
    const newArr = arr.slice(i, i + num);
    const sum = newArr.reduce((acc, cur) => acc + cur, 0);
    if (sum > result) {
      result = sum;
    }
  }
  return result;
}
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null
