// Using Morris Traversal, we can traverse the tree without using stack and recursion. 
// The idea of Morris Traversal is based on Threaded Binary Tree. In this traversal, 
// we first create links to Inorder successor and print the data using these links, 
// and finally revert the changes to restore original tree.

const Stack = require("../Stack.js");
const Tree = require("./Tree");

//Creating the tree

var tree = new Tree(5);
tree.root.left = new tree.Node(3);
tree.root.right = new tree.Node(7);
tree.root.right.left = new tree.Node(6);
tree.root.left.left = new tree.Node(2);
tree.root.left.right = new tree.Node(4);
tree.root.left.left.left = new tree.Node(1);

var current = root;
 
while(current){
    if(!current.left){
        process.stdout.write(current.left.getData());
        current = current.right;
    }else{

    }
}

// Will do it later