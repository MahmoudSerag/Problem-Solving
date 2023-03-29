const merge = (word1, word2) => {
  console.time('start');
  let result = '';
  let counter;

  if (word1.length > word2.length) counter = word1.length;
  else counter = word2.length;

  for (let i = 0; i < counter; i++) {
    if (word1[i] !== '') result += word1[i];
    if (word2[i] !== undefined) result += word2[i];
  }

  // let result = '';
  // let counter = 0;
  // for (let i = 0; i < word2.length; i++) {
  //   if (word1[i] && word2[i]) {
  //     result += word1[i];
  //     result += word2[i];
  //     counter++;
  //   }
  // }
  // if (word1.length > word2.length) {
  //   result += word1.slice(counter);
  // } else {
  //   result += word2.slice(counter);
  // }
  console.timeEnd('start');
  return result;
};

console.log(merge('abc', 'pqr'));
