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

function radixSort(arr) {
  // 가장 큰 자리 수를 찾는다.
  const maxDigitCount = mostDigits(arr);

  for (let i = 0; i < maxDigitCount; i++) {
    // 10개의 배열을 갖는 배열을 만든다.
    const bucket = Array.from({length: 10}, () => []);

    for (let j = 0; j < arr.length; j++) {
      // 하나씩 돌면서 자리수에 대한 수를 찾는다.
      const digit = getDigit(arr[j], i);

      // 버킷에 각 자리수에 맞는 수를 넣어준다.
      bucket[digit].push(arr[j]);
    }

    // 2차원 배열을 1차원으로 만들어서 넣어준다.
    // arr = bucket.flat();
    arr = [].concat(...bucket);
  }
  return arr;
}

console.log(radixSort([1, 515, 123, 151, 2, 3, 7182, 12]));
