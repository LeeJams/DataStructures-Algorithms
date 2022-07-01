// Merges two already sorted arrays
/* 
비어 있거나 하나의 요소가 있을 때까지 배열을 반으로 나눕니다.
정렬된 배열이 더 작으면 배열의 전체 길이로 돌아갈 때까지 배열과 다른 정렬된 배열들을 병합합니다.
어레이가 다시 병합되면 병합된(및 정렬됨!) 어레이를 반환합니다.
*/

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}
console.log(merge([100, 200], [1, 2, 3, 5, 6]));
