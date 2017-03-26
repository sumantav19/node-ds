// Using Stack is the obvious way to traverse tree without recursion. Below is an algorithm 
// for traversing binary tree using stack.

const Stack = require("../Stack.js");
const Tree = require("./Tree");

//Creating the tree

var tree = new Tree(1);
tree.root.left = new tree.Node(2);
tree.root.right = new tree.Node(3);
tree.root.right.left = new tree.Node(7);
tree.root.left.left = new tree.Node(4);
tree.root.left.right = new tree.Node(5);
tree.root.left.left.left = new tree.Node(6);

function treeTraversal(root) {
    if(root == null || root == undefined){
        process.stdout.write("Empty tree");
        return;
    }
    var stack = new Stack();
    var current = root;
    while(current){
        while (current){
            stack.push(current);
            current = current.left;
        }
        process.stdout.write(stack.pop().getData().toString());
        current = stack.peek().right;   
        while(!current){
            process.stdout.write(stack.pop().getData().toString());
            current = stack.peek().right;
        }
    }
}

treeTraversal(tree.root);