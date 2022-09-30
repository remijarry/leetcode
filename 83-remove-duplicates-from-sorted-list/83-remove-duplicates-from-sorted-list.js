/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let dummy = head;
    
    while (dummy) {
        if (dummy.next && dummy.next.val === dummy.val) {
            dummy.next = dummy.next.next;
        } else {
            dummy = dummy.next;
        }
    }
    
    return head;
};