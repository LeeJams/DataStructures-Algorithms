class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const hashIdx = this._hash(key);

    if (!this.keyMap[hashIdx]) {
      this.keyMap[hashIdx] = [];
    }
    this.keyMap[hashIdx].push([key, value]);

    return hashIdx;
  }

  get(key) {
    const hashIdx = this._hash(key);
    if (this.keyMap[hashIdx]) {
      for (let i = 0; i < this.keyMap[hashIdx].length; i++) {
        if (this.keyMap[hashIdx][i][0] === key) {
          return this.keyMap[hashIdx][i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}

const ht = new HashTable();
ht.set("salmon", "거꾸로");
ht.set("dog", "멍멍");
ht.set("cat", "야옹");
ht.set("cow", "음머");
ht.set("duck", "꽥");

console.log(ht.keyMap);
console.log(ht.get("salmon"));
console.log(ht.get("salmons"));
console.log(ht.get("cat"));
console.log(ht.get("duck"));
console.log(ht.keys());
console.log(ht.values());

ht.keys().forEach((key) => console.log(ht.get(key)));
