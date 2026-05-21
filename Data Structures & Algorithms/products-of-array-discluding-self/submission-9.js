class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     * [ 1, 2, 4, 6]
     * [ 1, 1, 2, 8]
     * [48,24, 6, 1]
     */
    productExceptSelf(nums) {
        let result = [];
        let prefix = 1,
            postfix = 1;
        for (let i = 0; i < nums.length; i++) {
            if (i === 0) prefix *= 1;
            else prefix *= nums[i - 1];
            result.push(prefix);
        }
        for (let i = nums.length - 1; i >= 0; i--) {
            if (i === nums.length - 1) postfix *= 1;
            else postfix *= nums[i + 1];
            result[i] *= postfix;
        }
        return result;
    }
}
