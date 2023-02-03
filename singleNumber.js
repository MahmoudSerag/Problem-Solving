const singleNumber = (nums) => {
  let object = {};
  for (let i = 0; i < nums.length; i++) {
    if (!object[nums[i]]) object[nums[i]] = 1;
    else object[nums[i]]++;
  }
  console.log(object);
  for (let i in object) {
    if (object[i] === 1) return i;
  }
};
console.log(singleNumber([2, 2, 1]));
