/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
let count = 0;
    let cur = head;
    let pos = new Map();

    while (cur) {
        pos.set(count, cur);
        count++;
        cur = cur.next;
    }

    if (count === n) {
        return head.next;
    }

    let prev = pos.get(count - n - 1) == undefined ? null : pos.get(count - n - 1);
    let tobeRemoved = pos.get(count - n) == undefined ? null : pos.get(count - n);
    let next = pos.get(count - n + 1) == undefined ? null : pos.get(count - n + 1);

    if (prev) {
        prev.next = next;
    }
    tobeRemoved = null;

    return head;
};