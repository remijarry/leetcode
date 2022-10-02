function sumOfLeftLeaves(root) {
    let sum = 0;
    const nodesToTraverse = [root];

    while(nodesToTraverse.length) {
        const node = nodesToTraverse.pop();

        if(node?.left) {
            if(!node.left.left && !node.left.right) {
                sum += node.left.val;
            } else {
                nodesToTraverse.push(node.left);
            }
        }

        if(node?.right) {
            nodesToTraverse.push(node.right);
        }
    }

    return sum;
}