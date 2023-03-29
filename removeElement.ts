const removeElement = (nums: any[], val: number): number => {
  let arrayLength: number = nums.length;
  let counter: number = 0;
  for (let i = arrayLength - 1; i >= 0; i--) {
    if (nums[i] === val) {
      console.log(`index: ${i}, ${nums[i]}`);
      nums.splice(i, 1);
      nums.push('_');
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== '_') counter++;
  }
  return counter;
};
