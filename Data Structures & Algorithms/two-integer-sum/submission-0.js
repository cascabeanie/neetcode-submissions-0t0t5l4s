class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
    const numsMap = new Map();
    let j;

    for (let i = 0; i < nums.length; i++) {
        j = numsMap.get(target - nums[i]);
        if (j !== undefined) {
            return [j, i];
        }

        numsMap.set(nums[i], i);
    }

    return -1;
    }
}
