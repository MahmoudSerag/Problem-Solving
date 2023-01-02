// Problem 1
const removeDuplicates = (nums) => {
  // Solution 1
  const myArray = new Set(nums);
  nums = [...myArray];
  return nums;

  // Solution 2
  // let duplicatedValueStatus = {};
  // let filteredArray = [];
  // nums.forEach(el => {
  //     if (!duplicatedValueStatus[el]) {
  //         duplicatedValueStatus[el] = true;
  //         filteredArray.push(el);
  //     }
  // });
  // nums = filteredArray;
  // return nums;
};
console.log(removeDuplicates([1, 1, 2]));
