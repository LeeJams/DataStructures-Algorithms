/* 
Pivot Helper
병합 정렬을 구현하려면 먼저 피벗의 양쪽에 있는 배열의 요소를 정렬하는 기능을 구현하는 것이 유용합니다.
배열이 주어지면 이 도우미 함수는 요소를 피벗으로 지정해야 합니다.
그런 다음 피벗보다 작은 모든 값이 피벗의 왼쪽으로 이동하고 피벗보다 큰 모든 값이 피벗의 오른쪽으로 이동하도록 배열의 요소를 재정렬해야 합니다.
피벗 양쪽에 있는 요소의 순서는 중요하지 않습니다!
도우미가 이 작업을 수행해야 합니다. 즉, 새 배열을 만들지 않아야 합니다.
완료되면 도우미가 피벗 인덱스를 반환해야 합니다.

피벗 선택
빠른 정렬의 런타임은 피벗을 선택하는 방법에 따라 부분적으로 달라진다.
이상적으로는 정렬하려는 데이터 집합의 중위수 값이 되도록 피벗을 선택해야 합니다.

Pivot Pseudocode
배열, 시작 인덱스 및 끝 인덱스(각각 기본값으로 0과 배열 길이에서 1을 뺀 값)의 세 가지 인수를 사용할 수 있습니다.
배열의 시작에서 피벗 잡기
변수에 현재 피벗 인덱스 저장(피벗이 끝날 위치를 추적함)
처음부터 끝까지 배열을 순환합니다.
피벗이 현재 요소보다 크면 피벗 인덱스 변수를 증가시킨 다음 현재 요소를 피벗 인덱스의 요소와 맞바꾸십시오.
시작 요소(즉, 피벗)를 피벗 인덱스와 맞바꾸십시오.
피벗 인덱스 반환
*/

function pivotHelper(arr) {
  let pivot = 0;
  let start = 1;
  const last = arr.length;

  let i = 1;
  while (i < last) {
    if (arr[i] < arr[pivot]) {
      if (start !== i) {
        let temp = arr[start];
        arr[start] = arr[i];
        arr[i] = temp;
      }
      start++;
    }
    i++;
  }
  let temp = arr[start - 1];
  arr[start - 1] = arr[pivot];
  arr[pivot] = temp;

  return arr;
}

// ----------------------------------------------------

// First Version
function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  var pivot = arr[start];
  var swapIdx = start;

  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

// Version with ES2015 Syntax
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));

/* 
Quicksort Pseudocode

어레이의 피벗 도우미 호출
도우미가 업데이트된 피벗 인덱스를 반환하면 해당 인덱스의 왼쪽 하위 배열에 있는 피벗 도우미를 반복적으로 호출하고 해당 인덱스의 오른쪽 하위 배열을 호출합니다.
요소가 2개 미만인 하위 배열을 고려할 때 기본 사례가 발생합니다.
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1);
  }
  return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
