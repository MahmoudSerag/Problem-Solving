const truncateSentence = (s, k) => {
  const splitArray = s.split(' ');
  return splitArray.slice(0, k).join(' ');
};

console.log(truncateSentence('Hello how are you Contestant', 4));
