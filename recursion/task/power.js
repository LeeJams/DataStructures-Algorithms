/* 
Write a function called power which accepts a base and an exponent.
The function should return the power of the base to the exponent.
This function should mimic the functionality of Math.pow() - do now worry about negative bases and exponents.

밑변과 지수를 받는 power 함수를 작성하세요.
함수는 기저의 검정력을 지수로 반환해야 합니다.
이 함수는 Math.pow()의 기능을 모방해야 합니다.
*/
function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16
console.log(power(5, 3)); // 16
