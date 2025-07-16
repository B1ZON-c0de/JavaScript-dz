function isEqualSymbols(str1, str2) {
  const str1Set = new Set([...str1]);
  const str2Set = new Set([...str2]);
  return (
    str1Set.size === str2Set.size &&
    [...str1Set].every((char) => str2Set.has(char))
  );
}

console.log(isEqualSymbols('адрес', 'среда')); // true
console.log(isEqualSymbols('ноутбук', 'программист')); // false
console.log(isEqualSymbols('abc', 'aab')); // false
