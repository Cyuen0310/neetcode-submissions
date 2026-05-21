class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * 
     [2,20,4,10,3,4,5]
     */
    longestConsecutive(nums) {
        let maxStreak = 0
        let set = new Set(nums)
        for (let num of set){
            if (set.has(num-1)) continue
            else{
                let currentStreak = 1
                while(set.has(num+=1)) currentStreak++
                maxStreak = currentStreak > maxStreak ? currentStreak : maxStreak
            }
        }
        return maxStreak
    }
}
