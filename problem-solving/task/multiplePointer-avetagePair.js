/* 
Write a function called averagePair.
Given a sorted array of integers and a target average, 
determine if there is a pair of values in the array where the average of the target average.
There may be more than one pair that matches the average target.

averagePair이라는 함수를 작성합니다.
**정렬된** 정수 배열과 목표 평균이 주어지면
배열에 목표 평균의 평균이 있는 값의 쌍이 있는지 확인합니다.
평균 대상과 일치하는 쌍이 두 개 이상 있을 수 있습니다.

Time: O(n)
Space: O(1)
*/

// 정렬된 것을 생각 하지 못한 코딩
function averagePair(arr, avg) {
  if (!arr.length) return false;
  let left = 0;
  let right = 1;
  while (left < arr.length - 1) {
    let tempAvg = (arr[left] + arr[right]) / 2;
    if (tempAvg === avg) {
      return true;
    }
    if (right < arr.length) {
      right++;
    } else {
      left++;
      right = left + 1;
    }
  }
  return false;
}

function averagePair_solution1(arr, num){
  let start = 0
  let end = arr.length-1;
  while(start < end){
    let avg = (arr[start]+arr[end]) / 2 
    if(avg === num) return true;
    else if(avg < num) start++
    else end--
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // ture
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // ture
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
