const plusOne = (digits) => {
  const stringToInt = Number(digits.join(''));
  const sum = stringToInt + 1;
  digits = [];
  for (let i = 0; i < sum.toString().length; i++) {
    digits.push(sum.toString()[i]);
  }
  return digits;
};
console.log(plusOne([6, 1, 4]));
