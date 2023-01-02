function digital_root(n) {
  let result = 0;
  const string = n.toString();
  for (let i = 0; i < string.length; i++) {
    result += parseInt(string[i]);
  }
  return result.toString().length > 1 ? digital_root(result) : result;
}

console.log(digital_root(942));