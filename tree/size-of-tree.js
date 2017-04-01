//Size of a tree is the number of elements present in the tree.

const Tree = require("./Tree");


//Creating the tree
var tree = new Tree(5);
tree.root.left = new tree.Node(3);
tree.root.right = new tree.Node(7);
tree.root.right.left = new tree.Node(6);
tree.root.left.left = new tree.Node(2);
tree.root.left.right = new tree.Node(4);
tree.root.left.left.left = new tree.Node(1);
// tree.root.left.left.right = new tree.Node(3);


function getTreeSize(root) {
    var count = 0;
    if (!root) {
        return 0;
    }
    count++;
    count += getTreeSize(root.left);
    count += getTreeSize(root.right);
    return count;
}

console.log(getTreeSize(tree.root));