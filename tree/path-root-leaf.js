// Given a binary tree, print all root-to-leaf paths
// For the below example tree, all root-to-leaf paths are: 
// 10 –> 8 –> 3
// 10 –> 8 –> 5
// 10 –> 2 –> 2

const Tree = require("./Tree");

//Creating the tree

var tree = new Tree(5);
tree.root.left = new tree.Node(3);
tree.root.right = new tree.Node(7);
tree.root.right.left = new tree.Node(6);
tree.root.left.left = new tree.Node(2);
tree.root.left.right = new tree.Node(4);
tree.root.left.left.left = new tree.Node(1);

const paths = [];

// traverse you get undefined or null that is till you get a leaf
function traverse(root, path) {
    // if tree is undefined or root is undefined
    if ( !root ) {
        return;
    }
    // if the node is a leaf then print the path 
    if (!root.left && !root.right) {
        path.push(root.getData());
        console.log(path.join(" --> "))
        return;
    }
    // if path is not initalized. or put the present node data in to path
    path ? path.push(root.getData()) : (path = [root.getData()]);

    // set the left path  for left subtree
    var leftPath = path.slice( 0 , path.length );
    traverse(root.left, leftPath);
    // set the right path for right subtree
    var rightPath = path.slice( 0 , path.length );
    traverse(root.right,rightPath);
}
traverse(tree.root);


