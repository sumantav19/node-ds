// A node is a leaf node if both left and right child nodes of it are NULL.


const Tree = require("./Tree");


//Creating the tree
var tree = new Tree(5);
tree.root.left = new tree.Node(3);
tree.root.right = new tree.Node(7);
tree.root.right.left = new tree.Node(6);
tree.root.left.left = new tree.Node(2);
tree.root.left.right = new tree.Node(4);
tree.root.left.left.left = new tree.Node(1); 
tree.root.left.left.right = new tree.Node(3); 

function countLeafNode(root){
    var count = 0;
    if( root == undefined ){    
        return 0;
    }
    if( !root.left && !root.right ){
        count++;
        return 1;
    }
    
    count += countLeafNode(root.left);
    count += countLeafNode(root.right);
    return count;
}
var count = 0;

count = countLeafNode(tree.root,count);

process.stdout.write(count.toString());