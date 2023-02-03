const arrayStringsAreEqual = (word1, word2) => {
  if (word1.join('') === word2.join('')) return true;
  return false;
};

console.log(arrayStringsAreEqual(['ab', 'c'], ['a', 'bc']));
