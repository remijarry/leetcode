/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    let a = [];
    let dummy = head;
    while (dummy) {
        a.push(dummy);
        dummy = dummy.next;
    }

    let b = Array(a.length);

    for (let i = 0; i < a.length; i++) {
        let index = (i + k) % a.length;
        b[index] = a[i];
    }

    dummy = new ListNode();
    let newHead = dummy;
    for (let node of b) {
        dummy.next = new ListNode(node.val);
        dummy = dummy.next;
    }

    return newHead.next;  
};