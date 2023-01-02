const toCamelCase = str => {
  let newString;
  if (str.includes('-')) {
    newString = str.split('-');
  }
  else {
    newString = str.split('_');
  }

  for (let i = 1; i < newString.length; i++) {
    newString[i] = newString[i][0].toUpperCase() + newString[i].substr(1);
  }
  return newString.join('');
}

console.log(toCamelCase('the-stealth-warrior'));
console.log(toCamelCase('The_Stealth_Warrior'));