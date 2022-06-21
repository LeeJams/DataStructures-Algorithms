/* 
Write a function called isSubsequence which takes in two strings 
and checks whether the characters in the first string form a subsequence of the characters in the second string.
In ohter words, the function should check whether the characters in the first string appear somewhere in the second string,
without their order changing.

두 문자열을 가져오는 isSubsequence라는 함수를 씁니다.
첫 번째 문자열의 문자가 두 번째 문자열의 문자의 시퀀스를 형성하는지 확인합니다.
즉, 함수는 첫 번째 문자열의 문자가 두 번째 문자열의 어딘가에 나타나는지 확인해야 한다.
순서를 바꾸지 않고요.

Time: O(n + m)
Space: O(1)
*/
function isSubsequence(str1, str2) {
  if (str1.length > str2.length) return false;
  else if (str1.length === str2.length) return str1 === str2;

  let left = 0;

  for (let i = 0; i < str2.length; i++) {
    if (str1[left] === str2[i]) {
      left++;
    }

    if (left === str1.length - 1) return true;
  }
  return false;
}

function isSubsequence_solution(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

function isSubsequence_recursive(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0])
    return isSubsequence_recursive(str1.slice(1), str2.slice(1));
  return isSubsequence_recursive(str1, str2.slice(1));
}

console.log(isSubsequence("hello", "hello world")); // ture
console.log(isSubsequence("sing", "sting")); // ture
console.log(isSubsequence("abc", "abracadabra")); // ture
console.log(isSubsequence("abc", "acb")); // false (order matters)

console.log(isSubsequence_recursive("hello", "hello world")); // ture
console.log(isSubsequence_recursive("sing", "sting")); // ture
console.log(isSubsequence_recursive("abc", "abracadabra")); // ture
console.log(isSubsequence_recursive("abc", "acb")); // false (order matters)
