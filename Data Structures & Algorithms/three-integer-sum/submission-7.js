class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     * To do:
     * make it be a 2sum
     *
     */
    threeSum(nums) {
        let result = [];
        let tripletsMap = new Map();
        nums = nums.sort((a, b) => a - b);
        console.log(nums);
        for (let i = 0; i < nums.length; i++) {
            let target = 0 - nums[i];
            let left = i + 1,
                right = nums.length - 1;
            while (left < right) {
                let sum = nums[left] + nums[right];
                if (sum < target) left++;
                else if (sum > target) right--;
                else {
                    let key = `${nums[i]}${nums[left]}${nums[right]}`;
                    if (!tripletsMap.has(key))
                        tripletsMap.set(key, [nums[i], nums[left], nums[right]]);
                    left++;
                    right--;
                }
            }
        }
        tripletsMap.forEach((value,_) => {
            result.push(value)
        })
        return result

    }
}
