function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  let maxDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }
  return maxDigits;
}


/* 
RADIX SORT PSEUDOCODE
숫자 목록을 허용하는 함수 정의
가장 큰 숫자가 몇 자리인지 파악합니다.
k = 0부터 최대 자릿수까지 루프
루프의 각 반복에 대해:
각 자릿수에 대한 버킷 만들기(0 ~ 9)
k번째 숫자를 기준으로 각 숫자를 해당 버킷에 배치합니다.
기존 어레이를 버킷의 값으로 바꿉니다(0부터 시작하여 최대 9까지).
마지막에 목록을 반환하세요!
*/