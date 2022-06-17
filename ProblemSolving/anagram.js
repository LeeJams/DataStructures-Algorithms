function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const firstObj = {};
  const secondObj = {};
  for (let i = 0; i < str1.length; i++) {
    firstObj[str1[i]] = ++firstObj[str1[i]] || 1;
    secondObj[str2[i]] = ++secondObj[str2[i]] || 1;
  }
  for (let key in firstObj) {
    if (!(key in secondObj)) {
      return false;
    }

    if (firstObj[key] !== secondObj[key]) {
      return false;
    }
  }
  return true;
}

function validAnagram_solution(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup)

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
