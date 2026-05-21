class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let row = Array.from({length: 9}, ()=> new Set()) 
        let col = Array.from({length: 9}, ()=> new Set()) 
        let zone = Array.from({length: 9}, ()=> new Set()) 
        for (let i = 0; i < 9; i++){
            for (let j = 0; j < 9; j++){
                let digit = board[i][j]
                if (digit === ".") continue
                let zoneId = Math.floor(i/3) *3 + Math.floor(j/3)
                console.log(zoneId)
                if (row[i].has(digit)) return false
                if (col[j].has(digit)) return false
                if (zone[zoneId].has(digit)) return false
                row[i].add(digit)
                col[j].add(digit)
                zone[zoneId].add(digit)
            }
        }
        return true
    }
}
