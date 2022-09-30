/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    let nodeMap = new Map();

    let dummy = head;
    let newList = new ListNode();
    let dummyNew = newList;

    while (dummy) {
        let next = dummy.next;

        if (next) {
            dummyNew.next = new ListNode(dummy.val, next ?? new ListNode(next.val))
        }
        else {
            dummyNew.next = new ListNode(dummy.val)
        }

        if (!nodeMap.has(dummy)) {
            nodeMap.set(dummy, dummyNew.next)
        }
        dummyNew = dummyNew.next;
        dummy = dummy.next;

    }

    for (let [key, value] of nodeMap) {
        let original = key;
        let copied = value;

        originalRandom = original.random;
        copiedRandom = nodeMap.get(originalRandom);

        copied.random = copiedRandom;
    }


    return newList.next;
};