class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";
        for (let str of strs) {
            result += `${str.length}#${str}`;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") j++;
            let len = parseInt(str.substring(i, j));
            i = j + 1;
            j = j + len + 1;
            let word = str.substring(i, j);
            result.push(word);
            i = j;
        }
        return result;
    }
}
