function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

function fib_memo(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  let res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}

function fib_table(n) {
  if (n <= 2) return 1;
  const fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}

// console.log(fib(40));
console.log(fib_table(3));
console.log(fib_table(4));
console.log(fib_table(5));
console.log(fib_table(6));
console.log(fib_table(7));
console.log(fib_table(8));
console.log(fib_table(9));
console.log(fib_table(10));
console.log(fib_table(11));
console.log(fib_table(12));
console.log(fib_table(13));
console.log(fib_table(14));