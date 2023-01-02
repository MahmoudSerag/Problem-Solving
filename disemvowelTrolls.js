const disemvowel = str => {
  let newString = [];
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] !== 'a' && str[i] !== 'A' && 
      str[i] !== 'e' && str[i] !== 'E' && 
      str[i] !== 'i' && str[i] !== 'I' && 
      str[i] !== 'o' && str[i] !== 'O' && 
      str[i] !== 'u' && str[i] !== 'U') {
        newString.push(str[i]);
    }
  }
  return newString.join('');
}

console.log(disemvowel('This website is for losers LOL!'));