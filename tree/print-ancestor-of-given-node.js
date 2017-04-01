// Given a Binary Tree and a key, write a function that prints all the ancestors 
// of the key in the given binary tree.

const Tree = require("./Tree");

//Creating the tree

var tree = new Tree(5);
tree.root.left = new tree.Node(3);
tree.root.right = new tree.Node(7);
tree.root.right.left = new tree.Node(6);
tree.root.left.left = new tree.Node(2);
tree.root.left.right = new tree.Node(4);
tree.root.left.left.left = new tree.Node(1);


function printAncestor(root,key){
    if(root == undefined || root == null){
        return false;
    }
    if( root.getData() ==  key ){       
        return true;
    }
    if( printAncestor(root.left,key) || printAncestor(root.right,key)){
         process.stdout.write(root.getData().toString()+"\n");
         return true;
    }else{
        return false;
    }
}

printAncestor(tree.root,1);