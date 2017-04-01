// Using Stack is the obvious way to traverse tree without recursion. Below is an algorithm 
// for traversing binary tree using stack.

const Stack = require("../Stack.js");
const Tree = require("./Tree");

//Creating the tree

var tree = new Tree(1);
tree.root.left = new tree.Node(2);
tree.root.right = new tree.Node(3);
tree.root.right.left = new tree.Node(5);
tree.root.right.right = new tree.Node(4);
tree.root.left.left = new tree.Node(7);
tree.root.left.right = new tree.Node(6);

function treeTraversal(root) {
    if (root == null || root == undefined) {
        process.stdout.write("Empty tree\n");
        return;
    }
    var treeStack = new Stack();    
    // 1: push the root on to stack
    treeStack.push(root);
    // 2 : intialize current to left node
    var current = root.left;    
    while (!treeStack.isEmpty() || !(current == undefined) ) {
        // 3 : push current to the stack till it is null or undefined
        while (current) {
            treeStack.push(current);
            // 4: set left node to current
            current = current.left;
        }
        // 5: when current is undefined or null pop from stack and set the current to right node of the popped element of the stack
        process.stdout.write(treeStack.peek().getData().toString());
        current = treeStack.pop().right;
        // repeat from step 3 till stack is empty or current is null or undefined

    }
}

treeTraversal(tree.root);