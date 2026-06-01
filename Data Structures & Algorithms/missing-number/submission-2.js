class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let total = 0;
        let sum = 0;
        for (let i = 0; i < nums.length + 1; i++) {
            total += i;
        }
        for (let num of nums) {
            sum += num;
        }
        return total - sum;
    }
}
