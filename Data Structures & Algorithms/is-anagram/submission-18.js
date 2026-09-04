class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false
        let arr = new Array(26).fill(0)

        for (let char of s){
            arr[char.charCodeAt(0) - 97]++
        }
        for (let char of t){
            arr[char.charCodeAt(0) - 97]--
        }
        for (let i = 0; i < 26; i++){
            if (arr[i] !== 0) return false
        }
        return true
        

    }
}
