/* 
Write a function factorial which accepts a number and returns the factorial of that number.
A factorial is the product of an integer and all the integers below it;
e.g., factorial four is equal to 24, because 4 * 3 * 2 * 1 equals 24. factorial zero is always 1.

factorial 을 반환하는 factorial 함수를 작성해라.
*/
function factorial(num){
   if(num < 1) return 1;
   return num * factorial(num - 1);
}
console.log(factorial(0)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040
