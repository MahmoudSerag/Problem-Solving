const lengthOfLastWord = (s) => {
  const splittedString = s.trim().split(' ');
  return splittedString[splittedString.length - 1].length;
};

console.log(lengthOfLastWord('   fly me   to   the moon  '));
