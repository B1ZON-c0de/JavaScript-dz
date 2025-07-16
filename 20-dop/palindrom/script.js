function isPalindrome(str) {
  const originalStr = str.toLowerCase().replace(/\s/g, '');
  const strReverse = [...originalStr].reverse().join('');
  return originalStr === strReverse;
}

console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('programmer')); // false
