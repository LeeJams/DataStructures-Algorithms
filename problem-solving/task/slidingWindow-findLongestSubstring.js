/* 
Write a function called findLongestSubstring, 
which accepts a string and returns the length of the longest substring with all distinct characters.

findLongestSubstring이라는 함수를 작성합니다.
문자열을 허용하고 모든 고유한 문자가 포함된 가장 긴 하위 문자열의 길이를 반환합니다.

Time Complexity: O(n)
*/
function findLongestSubstring(str) {
  return [...new Set(str.split(''))].length
}

console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('thecarinthehat')); // 7
console.log(findLongestSubstring('bbbbbb')); // 1
console.log(findLongestSubstring('longestsubstring')); // 8
console.log(findLongestSubstring('thisisshowwedoit')); // 6
