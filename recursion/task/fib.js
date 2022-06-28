/* 
Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence.
Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ...
which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

숫자를 받아들이고 피보나치 시퀀스의 n번째 숫자를 반환하는 fib라는 재귀 함수를 작성합니다.
피보나치 수열은 정수 1, 1, 2, 3, 5, 8, ...의 수열임을 기억하십시오.
1과 1로 시작하며, 그 이후의 모든 숫자는 앞의 두 숫자의 합과 같다.
*/

function fib(n){
  if (n <= 2) return 1;
  return fib(n-1) + fib(n-2);
}

console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(20)); // 317811
console.log(fib(35)); // 9227465
