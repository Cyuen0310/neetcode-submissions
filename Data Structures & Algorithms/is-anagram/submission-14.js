class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false
        let charArr = new Array(26).fill(0)
        for (let char of s){
            charArr[char.charCodeAt(0)-'a'.charCodeAt(0)]++
        }
        for (let char of t){
            charArr[char.charCodeAt(0)-'a'.charCodeAt(0)]--
            if (charArr[char.charCodeAt(0)-'a'.charCodeAt(0)] < 0) return false
        }
        return true
    }
}
