const moveZeroes = nums => {
    if (nums.length === 1) return nums;
    let length = nums.length;
    for (let i = length - 1; i >= 0; i--) {
        if (nums[i] === 0) {
            nums.push(0);
            nums.splice(i, 1);
        }
    }
    return nums;
};
console.log(moveZeroes([0, 0, 1]));