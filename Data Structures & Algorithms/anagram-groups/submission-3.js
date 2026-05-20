class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        let result = [];
        for (let str of strs) {
            let arr = new Array(26).fill(0);
            for (let char of str) {
                arr[char.charCodeAt(0) - "a".charCodeAt(0)]++;
            }
            let key = arr.toString();
            if (!map.has(key)) map.set(key, []);
            map.get(key).push(str);
        }
        map.forEach((value, key) => {
            result.push(value);
        });
        return result;
    }
}
