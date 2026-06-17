class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let cur = 0, max = 0
        for (let num of nums){
            if (num) cur++
            else{
                cur = 0
            }                
            max = Math.max(cur, max)
        }
        return max
    }
}
