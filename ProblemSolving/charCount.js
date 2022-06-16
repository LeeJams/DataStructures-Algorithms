function charCount(str) {
  // 객체를 반환한다.
  const result = {};
  // 반복문을 돌려 문자 하나하나를 확인한다.
  const lowerStr = str.toLowerCase();
  for (let i = 0; i < lowerStr.length; i++) {
    // 공백 등은 제외한다.
    if (/[a-z0-9]/g.test(lowerStr[i])) {
      // 그것이 숫자나 문자면 키가 된다.
      // 그 키가 존재하면 값에 1을 더해주고 존재하지 않는다면 생성한 후 1을 넣어준다.
      result[lowerStr[i]] ? result[lowerStr[i]]++ : (result[lowerStr[i]] = 1);
    }
  }
  return result;
}

function charCount(str) {
  const result = {};
  const lowerStr = str.toLowerCase();
  for (let char of lowerStr) {
    if (/[a-z0-9]/g.test(char)) {
      result[char] = ++result[char] || 1;
    }
  }
  return result;
}

console.log(charCount("hello"));
console.log(charCount("Anything else??"));
console.log(charCount("I want 100 dollar"));
