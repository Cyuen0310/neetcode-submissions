class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     * trapped formula = min(left max/right max) - current height
     */
    trap(height) {
        if (height.length < 1) return 0
        let trapped = 0,
            left = 0,
            right = height.length - 1,
            leftMax = height[left],
            rightMax = height[right];

        while (left < right) {
            if (leftMax <= rightMax) {
                trapped += Math.max(leftMax - height[left], 0);
                left++;
                leftMax = leftMax < height[left] ? height[left] : leftMax;
            } else {
                trapped += Math.max(rightMax - height[right], 0);
                right--;
                rightMax = rightMax < height[right] ? height[right] : rightMax;
            }
        }

        return trapped;
    }
}
