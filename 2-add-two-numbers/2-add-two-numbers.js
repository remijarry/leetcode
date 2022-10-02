/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let remainder = 0
    let resultList = new ListNode();
    let dummy = resultList;
    while (l1 || l2) { // || remainder ?
        let result = 0;

        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;

        result = (val1 + val2 + remainder)
        remainder = Math.floor(result / 10);

        dummy.next = new ListNode(result % 10);

        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
        dummy = dummy.next;
    }

    if (remainder > 0) {
        dummy.next = new ListNode(remainder);
    }

    return resultList.next;
};