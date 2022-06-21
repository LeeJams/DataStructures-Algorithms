/* 
multiple_pointer 패턴

console.log(countUniqueValues

정렬된 배열을 허용하고 배열의 고유 값을 카운트하는 countUniqueValues라는 함수를 구현합니다. 
배열에 음수가 있을 수 있지만 항상 정렬됩니다.
*/

function countUniqueValues(arr) {
  if (!arr.length) return 0;
  const result = [arr[0]];
  for (let i of arr) {
    if (result[result.length - 1] !== i) {
      result.push(i);
    }
  }
  return result.length;
}

function countUniqueValues_solution(arr) {
  if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13, 13, 14, 14, 14])); // 8
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

console.log(countUniqueValues_solution([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues_solution([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues_solution([])); // 0
console.log(countUniqueValues_solution([-2, -1, -1, 0, 1])); // 4
console.log(countUniqueValues_solution([1])); // 1
