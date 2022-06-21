/* 
    빈도 카운트 - 보통 객체를 사용하여 문제를 해결한다.

    2개의 배열을 받는 same 이라는 함수를 작성한다.
    첫 번째 배열의 모든 값이 제곱이 두 번째 배열에 전부 존재하면 참 아니면 거짓을 반환한다.
    하지만 순서는 상관 없다.
    배열의 크기는 동일해야한다.
*/

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
  
      // for 문 안에 indexOf 가 있으므로 중첩 함수로 시간이 오래 걸린다.
      let correctIndex = arr2.indexOf(arr1[i] ** 2);
      if (correctIndex === -1) {
        return false;
      }
      console.log(arr2);
      arr2.splice(correctIndex, 1);
    }
    return true;
  }

function same_solution(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]));
console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));