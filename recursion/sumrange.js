function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

console.log(sumRange(4));

/* 
   return 4 + sumRange(3) = 6 = 10
   return 3 + sumRange(2) = 3 = 6
   return 2 + sumRange(1) = 1 = 3
*/