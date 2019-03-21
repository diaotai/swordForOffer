/**
 * 问题：给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针。
 * 本题实际的情况是给了一个节点，然后根据节点找到中序遍历下的下一个节点
 * 思路：本题分为以下几种情况:
 * 1. 该节点存在右子树：那么应当找到右子树下最靠左的节点
 * 2. 该节点不存在右子树且为父节点的左子树：那么下一个节点就是右节点
 * 3. 该节点不存在右子树且为父节点的右子树：不断向上，直到找到一个节点是其父节点的左子树，选择其父节点
 */

/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/
function GetNext(pNode) {
    if (!pNode) {
        return null;
    }

    let result = null;

    if (pNode.right) {
        result = pNode.right;
        while (result.left) {
            result = result.left;
        }
    } else {
        while (pNode.next) {
            if (pNode.next.right === pNode) {
                pNode = pNode.next;
            } else {
                result = pNode.next;
                break;
            }
        }
    }

    return result;
}
