// Given a binary tree, write a function that returns true if the tree satisfies below property.

// For every node, data value must be equal to sum of data values in left and right children.
//  Consider data value as 0 for NULL children


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


function checkChildrenSumProperty(root) {
    if (root == undefined) {
        return true;
    }
    if (root.left || root.right) {
        var childrenSum =
            (root.left ? root.left.getData() : 0) +
            (root.right ? root.right.getData() : 0);
        if ( childrenSum != root.getData()) {
            return false
        }
    }
    if ( !(checkChildrenSumProperty(root.left)) || !(checkChildrenSumProperty(root.right))) {
        return false;
    }
    else{
        return true;
    }
}

console.log(checkChildrenSumProperty(tree.root));