const hammingWeight = (n) => {
  console.log(n);
  let counter = 0;
  for (let i = 0; i < n.toString().length; i++) {
    if (n.toString()[i] === '1') counter++;
  }
  return counter;
  // return n.toString().replaceAll('0', '').length;
};
console.log(hammingWeight(11111111111111111111111111111101));
