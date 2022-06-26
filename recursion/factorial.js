// iterative
function factorial_iterative(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

console.log(factorial_iterative(4));

// recursive
function factorial_recursive(num) {
  if (num === 1) return 1;
  return num * factorial_recursive(num - 1);
}

console.log(factorial_recursive(4));
