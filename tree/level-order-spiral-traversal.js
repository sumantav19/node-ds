// Write a function to print spiral order traversal of a tree.  
// For below tree, function should print 1, 2, 3, 4, 5, 6, 7

const Tree = require('./Tree');

var tree = new Tree(1);
tree.root.left = new tree.Node(2);
tree.root.right = new tree.Node(3);
tree.root.right.left = new tree.Node(5);
tree.root.right.right = new tree.Node(4);
tree.root.left.left = new tree.Node(7);
tree.root.left.right = new tree.Node(6);


// Worst case time complexity of the above method is O(n^2). 
// Worst case occurs in case of skewed trees.

function getHeight(root){
    var height = 0;
    if( root == undefined){
        return 0;
    }

    var lHeight = getHeight(root.left);
    var rHeight = getHeight(root.right);
    height = lHeight > rHeight ? lHeight + 1 : rHeight + 1;  

    return height;
}
function printLevelFromLeft(root,height){
    if( root == undefined ){
        return;
    }
    if( height == 1 ){
        process.stdout.write(root.getData().toString())+" ";
        return;
    }
    printLevelFromLeft(root.left,height-1);
    printLevelFromLeft(root.right,height-1)
}
function printLevelFromRight(root,height){
    if( root == undefined ){
        return;
    }
    if( height == 1 ){
        process.stdout.write(root.getData().toString())+" ";
        return;
    }
    printLevelFromRight(root.right,height-1)
    printLevelFromRight(root.left,height-1);
    
}
function printLevelOrder(root){
    for(var i = 1; i <= getHeight(root) ; i++ ){
        if( i % 2 ==0 )
            printLevelFromLeft(root,i);
        else
            printLevelFromRight(root,i)
        process.stdout.write("\n");
    }
}

printLevelOrder(tree.root);