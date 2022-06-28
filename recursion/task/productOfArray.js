/* 
Write a function called productOfArray which takes in an array of numbers and return the product of them all.
숫자 배열을 가져와서 모든 숫자의 곱을 반환하는 productOfArray라는 함수를 작성합니다.
*/

function productOfArray(arr) {
  return arr.reduce((acc, cur) => acc * cur);
}
function productOfArray(arr) {
  if(!arr.length) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3, 10])); // 60
