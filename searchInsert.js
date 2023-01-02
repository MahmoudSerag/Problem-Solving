// Problem 3
const searchInsert = (nums, target) => {
    let ifExist = false;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            ifExist = true;
            return i;
        }
    }
    if (!ifExist) {
        for (let i = 0; i < nums.length; i++) {
            if (target === 0) {
                return i;
            } else if (target > nums[nums.length - 1]) {
                return nums.length;
            }
            else {
                if (target < nums[i]) {
                    return i;
                }
            }
        }
    }
}
console.log(searchInsert([1, 3, 5, 6], 5));