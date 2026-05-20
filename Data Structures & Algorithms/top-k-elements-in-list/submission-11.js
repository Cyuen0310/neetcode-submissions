class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap = new Map()
        let freqBucket = Array.from({length: nums.length + 1},()=> [])
        let result = []
        for (let num of nums){
            if (!freqMap.has(num)) freqMap.set(num,0)
            freqMap.set(num,freqMap.get(num)+1)
        } 
        freqMap.forEach ((value,key) => {
            freqBucket[value].push(key)
        })
        for (let i = freqBucket.length - 1; i >= 0; i--){
            for (let j = 0; j < freqBucket[i].length; j++){
                if (result.length < k) result.push(freqBucket[i][j])
            }
        }
        return result
    }
}
