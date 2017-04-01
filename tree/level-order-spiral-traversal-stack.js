// Write a function to print spiral order traversal of a tree.  
// For below tree, function should print 1, 2, 3, 4, 5, 6, 7

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



// We can print spiral order traversal in O(n) time and O(n) extra space.
//  The idea is to use two stacks. We can use one stack for printing from left to right
//   and other stack for printing from right to left. In every iteration, 
//   we have nodes of one level in one of the stacks. We print the nodes, 
//   and push nodes of next level in other stack.

function spiralLevelOrderTraversal(root){
    var s1 = new Stack();
    var s2 = new Stack();
    if(root == undefined){
        return;
    }
    s1.push(root);
    while(!s1.isEmpty() || !s2.isEmpty()){
        while(!s1.isEmpty()){
            var tempNode = s1.pop();
            process.stdout.write(tempNode.getData().toString()+" ");
            if(tempNode.right)
                s2.push(tempNode.right)
            if(tempNode.left)
                s2.push(tempNode.left)
        }
        process.stdout.write("\n");
        while(!s2.isEmpty()){
            var tempNode = s2.pop();
            process.stdout.write(tempNode.getData().toString()+" ");
            if(tempNode.left)
                s1.push(tempNode.left)
            if(tempNode.right)
                s1.push(tempNode.right)
        }
        process.stdout.write("\n");        
    }
}

spiralLevelOrderTraversal(tree.root);