/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let cur = head;
        let lastNode = null;
        while (cur !== null) {
            let nextNode = cur.next;
            
            cur.next = lastNode;
            lastNode = cur;
            if (nextNode === null) break;
            cur = nextNode
            
        }
        return lastNode;
    }
}
