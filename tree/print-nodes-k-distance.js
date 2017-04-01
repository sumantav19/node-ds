// Given a root of a tree, and an integer k. Print all the nodes which are at k distance from root.

const Tree = require("./Tree");

//Creating the tree

var tree = new Tree(5);
tree.root.left = new tree.Node(3);
tree.root.right = new tree.Node(7);
tree.root.right.left = new tree.Node(6);
tree.root.left.left = new tree.Node(2);
tree.root.left.right = new tree.Node(4);
tree.root.left.left.left = new tree.Node(1);

function printNodeAtK(root,k){
    if(k == 0 && root != undefined ){
        process.stdout.write(root.getData().toString())
        return;
    }
    if(root == null || root== undefined ){
        // process.stdout.write("Empty tree");
        return;
    }
    printNodeAtK(root.left,k-1);
    printNodeAtK(root.right,k-1);
}

printNodeAtK(tree.root,3);