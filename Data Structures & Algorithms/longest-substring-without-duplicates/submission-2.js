class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length <= 1) return s.length

        let currentLongest = ""
        let max = 0

        /*check if the char is in the longest substring
        if not, add to longest
        else, max = max(currentlongest, max)
        find the index in longest of duplicate char
        new longest = substring (index + 1)
        */
        
        for (let char of s){
            if (!currentLongest.includes(char)) currentLongest += char
            else{
                let index = currentLongest.indexOf(char)
                currentLongest = currentLongest.substring(index + 1)
                currentLongest += char
            }
            max = Math.max(max, currentLongest.length)
        }
        return max



        
    }
}
