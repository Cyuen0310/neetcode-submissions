class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     * limited by shorter wall
     * find the tallest wall in front of the current wall
     */
    trap(height) {
        let left = new Array(height.length)
        let right = new Array(height.length)
        let leftMax = 0
        let rightMax = 0
        let trapped = 0

        for (let i = 0; i < height.length; i++){
            left[i] = leftMax
            leftMax = leftMax < height[i] ? height[i]:leftMax
        }

        for (let i = height.length - 1; i >= 0; i--){
            right[i] = rightMax
            rightMax = rightMax < height[i] ? height[i]:rightMax
        }

        for (let i = 0; i < height.length; i++){
            trapped += Math.max(0,(Math.min(left[i], right[i]) - height[i]))
        }

        return trapped




        


    }
}
