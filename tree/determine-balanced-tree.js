// A tree where no leaf is much farther away from the root than any other leaf. 
// Different balancing schemes allow different definitions of “much farther” and 
// different amounts of work to keep them balanced.

// Consider a height-balancing scheme where following conditions should be checked to determine 
// if a binary tree is balanced.
// An empty tree is height-balanced. A non-empty binary tree T is balanced if:
// 1) Left subtree of T is balanced
// 2) Right subtree of T is balanced
// 3) The difference between heights of left subtree and right subtree is not more than 1.


const Tree = require("./Tree");


//Creating the tree
var tree = new Tree(60);
tree.root.left = new tree.Node(20);
tree.root.right = new tree.Node(40);

tree.root.right.left = new tree.Node(40);

tree.root.left.left = new tree.Node(10);
tree.root.left.right = new tree.Node(10);
tree.root.left.left.left = new tree.Node(4);
tree.root.left.left.right = new tree.Node(6);
tree.root.left.left.right.right = new tree.Node(6);

function getHeight(root) {
    if (root == undefined) {
        return 0;
    }
    var lHeight = getHeight(root.left);
    var rHeight = getHeight(root.right);

    return lHeight > rHeight ? lHeight + 1 : rHeight + 1;
}

function isBalanced(root) {
    if (root == undefined) {
        return true;
    }

    var lHeight = getHeight(root.left);
    var rHeight = getHeight(root.right);

    if (Math.abs(lHeight - rHeight) <= 1 && isBalanced(root.left) && isBalanced(root.right) )
        return true;
    else
        return false;
}

console.log(isBalanced(tree.root));