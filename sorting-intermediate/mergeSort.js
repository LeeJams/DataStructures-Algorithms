/* 
비어 있거나 하나의 요소가 있을 때까지 배열을 반으로 나눕니다.
정렬된 배열이 더 작으면 배열의 전체 길이로 돌아갈 때까지 배열과 다른 정렬된 배열들을 병합합니다.
어레이가 다시 병합되면 병합된(및 정렬됨!) 어레이를 반환합니다.

slice
*/
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));
  
  let results = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (right[j] > left[i]) {
      results.push(left[i]);
      i++;
    } else {
      results.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    results.push(left[i]);
    i++;
  }
  while (j < right.length) {
    results.push(right[j]);
    j++;
  }
  return results;
}

console.log(mergeSort([20, 31, 12, 1, 50, 5]));
