/*
  Problem name: Smallest Range II

  Difficulty level: Medium

  Problem description: You are given an integer array nums and an integer k.
  For each index i where 0 <= i < nums.length, change nums[i] to be either nums[i] + k or nums[i] - k.
  The score of nums is the difference between the maximum and minimum elements in nums.
  Return the minimum score of nums after changing the values at each index.

  Examples: {
    Example 1: {
      Input: nums = [1], k = 0
      Output: 0
      Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.
    }

    Example 2: {
      Input: nums = [0,10], k = 2
      Output: 6
      Explanation: Change nums to be [2, 8]. The score is max(nums) - min(nums) = 8 - 2 = 6.
    }

    Example 3: {
      Input: nums = [1,3,6], k = 3
      Output: 3
      Explanation: Change nums to be [4, 6, 3]. The score is max(nums) - min(nums) = 6 - 3 = 3.
    }
  }
*/

const smallestRangeII = (nums: number[], k: number): number => {
  let arrayLength: number = nums.length;
  nums.sort((a, b) => a - b);
  let result = nums[arrayLength - 1] - nums[0];

  for (let i = 1; i < arrayLength; ++i) {
    let min = Math.min(nums[0] + k, nums[i] - k);
    let max = Math.max(nums[i - 1] + k, nums[arrayLength - 1] - k);
    result = Math.min(result, max - min);
  }

  return result;
};

console.log(smallestRangeII([1, 3, 6], 3));
