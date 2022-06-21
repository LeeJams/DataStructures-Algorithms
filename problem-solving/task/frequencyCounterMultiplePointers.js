/* 
Implement a function called, areThereDuplicates which accepts a variable number of arguments,
and checks whether there are any duplicates among the arguments passed in.
You can solve this using the frequency counter pattern OR the multiple pointers pattern.

변수 개수의 인수를 허용하는 areThereDuplicates라는 함수를 구현합니다.
전달된 인수 사이에 중복되는 항목이 있는지 확인합니다.
주파수 카운터 패턴 또는 다중 포인터 패턴을 사용하여 해결할 수 있습니다.

Time - O(n)
Space - O(n)
*/
function areThereDuplicates(...args) {
  if (args.length < 2) return false;
  const findObj = {};
  for (let i of args) {
    findObj[i] = ++findObj[i] || 1;
  }
  for (let i in findObj) {
    if (findObj[i] > 1) {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
