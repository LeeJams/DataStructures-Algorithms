/* 
Frequency Counter - validAnagram

Given two strings, write a function to determine if the second string is an
anagram of the first. An anagram is a word, phrase, or name formed by
rearranging the letters of another, such as cinema, formed from iceman.
*/
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const firstObj = {};
  const secondObj = {};
  for (let i = 0; i < str1.length; i++) {
    firstObj[str1[i]] = ++firstObj[str1[i]] || 1;
    secondObj[str2[i]] = ++secondObj[str2[i]] || 1;
  }
  for (let key in firstObj) {
    if (!(key in secondObj)) {
      return false;
    }

    if (firstObj[key] !== secondObj[key]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
