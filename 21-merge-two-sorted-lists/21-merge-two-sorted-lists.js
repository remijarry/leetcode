/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let newList = new ListNode();
    let newHead = newList;
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            newList.next = new ListNode(list1.val);
            list1 = list1.next;
        } else {
            newList.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        newList = newList.next;
    }

    if (list1 && !list2) {
        newList.next = list1
    } else if (list2 && !list1) {
        newList.next = list2;
    }

    return newHead.next;
};