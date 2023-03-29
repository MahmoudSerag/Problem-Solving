const solution = (string) => {
  let partOne, partTwo;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      partOne = string.slice(0, i);
      partTwo = string.slice(i, string.length);
    }
  }
  if (partOne && partTwo) {
    return `${partOne} ${partTwo}`;
  } else {
    return string;
  }
};
console.log(solution('camelCasePart'));
