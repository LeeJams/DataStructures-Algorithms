/* 
    다중 포인터

    정렬된 정수의 배열을 받아들이는 sumZero라는 함수를 작성합니다. 
    함수는 합이 0인 첫 번째 쌍을 찾아야 합니다. 
    쌍이 존재하지 않는 경우 0이 되거나 정의되지 않은 값을 모두 포함하는 배열을 반환합니다.
*/
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
/* 
Time Complexity - O(N^2)
Space Complexity - O(1)
*/

function sumZero_solution(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if(sum > 0){
            right--;
        } else {
            left++;
        }
    }
}
/* 
Time Complexity - O(N)
Space Complexity - O(1)
*/

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5])); // [-2, 2]
console.log(sumZero([1, 2, 3])); // undefined
