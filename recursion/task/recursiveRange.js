/* 
Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function.

숫자를 받아들이고 0부터 함수에 전달된 숫자에 모든 숫자를 합산하는 recursiveRange라는 함수를 작성한다.
*/

function recursiveRange(num) {
  if (num === 1) return 1;
  return num + recursiveRange(num - 1);
}

console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55
