/* 
helper method recursion
헬퍼 메소드 재귀
*/
function collectOddValues_helper(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}
console.log(collectOddValues_helper([1, 2, 3, 4, 5, 6, 7, 8, 9]));

/* 
pure recursion
순수 재귀

Tip: 배열을 복사하는 slice, spread 연산자, concat 같은 메소드를 사용하면 배열을 변경할 필요가 없다.
*/
function collectOddValues_pure(arr) {
  let newArr = [];

  if (arr.length === 0) return newArr;

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOddValues_pure(arr.slice(1)));
  return newArr;
}
console.log(collectOddValues_pure([1, 2, 3, 4, 5, 6, 7, 8, 9]));
