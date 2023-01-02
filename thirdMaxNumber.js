const thirdMax = nums => {
    if (nums.length === 1) return nums[0];
    else if (nums.length === 2) return Math.max(...nums);
    else {
        const result = [...new Set(nums.sort((a, b) => b - a))];
        if (result.length < 3) return thirdMax(result);
        return result[2];
    }
}
console.log(thirdMax([1, 1, 2]));