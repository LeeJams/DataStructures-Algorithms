/* 
Write a function called sameFrequency. 
Given two positive integers, find out if the two numbers have the same frequency of digits.
Your solution MUST have the following complexities = Time: O(n)

same Frequency라는 함수를 작성합니다.
두 개의 양의 정수가 주어지면, 두 숫자가 가지고 있는 숫자의 개수가 맞는지 판단하시오.
*/
function sameFrequency(num1, num2) {
  const str1 = num1.toString();
  const str2 = num2.toString();
  if (str1.length !== str2.length) return false;
  const compareObj = {};
  for (let i = 0; i < str1.length; i++) {
    compareObj[str1[i]] = ++compareObj[str1[i]] || 1;
  }
  for (let i = 0; i < str2.length; i++) {
    if (compareObj[str2[i]]) {
      compareObj[str2[i]]--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(31, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
