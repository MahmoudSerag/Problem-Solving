const findTheDistanceValue = (arr1, arr2, d) => {
  let result = [];
  let negative = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) > d) negative.push(arr1[i]);
    }
    if (negative.length === arr2.length) result.push(...new Set(negative));
    negative = [];
  }
  return result.length;

  // let count = 0;
  // for (let i = 0; i < arr1.length; i++) {
  //   if (arr2.every((num) => Math.abs(num - arr1[i]) > d)) {
  //     count++;
  //   }
  // }
  // return count;

  //   let count = 0;
  //   for (let i = 0; i < arr1.length; i++) {
  //     const x = arr2.map((num) => Math.abs(num - arr1[i]));
  //     if (x.every((num) => num > d)) {
  //       count++;
  //     }
  //   }
  //   return count;
};

console.log(findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2));
