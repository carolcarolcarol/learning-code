//回文链表
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(head === null || head.next === null) return true;
    let mid = head;
    let pre = null;
    let reversed = null;
    while(head !== null && head.next !== null) {
        pre = mid
        mid = mid.next
        head = head.next.next
        pre.next = reversed
        reversed = pre
    }
    if(head) mid = mid.next
    while(mid) {
        if(reversed.val !== mid.val) return false
        reversed = reversed.next
        mid = mid.next
    }
    return true
};
