// The diameter of a tree (sometimes called the width) is the number of nodes on the longest path between two leaves in the tree.
//  The diagram below shows two trees each with diameter nine, the leaves that form the ends of a longest path are shaded
//   (note that there is more than one path in each tree of length nine, but no path longer than nine nodes).

const Tree = require("./Tree");
const printLevelOrder = require("./tree-traversal-bfs-function.js")

//Testing the tree

var tree = new Tree(20);
tree.root.left = new tree.Node(10);
tree.root.left.left = new tree.Node(5);
tree.root.left.right = new tree.Node(15);
tree.root.left.right.left = new tree.Node(11);
tree.root.left.right.right = new tree.Node(17);

tree.root.right = new tree.Node(30);
tree.root.right.right  = new tree.Node(40);
tree.root.right.right.right = new tree.Node(50);
tree.root.right.right.right.left = new tree.Node(45);
tree.root.right.right.right.left.left = new tree.Node(42);
tree.root.right.right.right.left.right = new tree.Node(47);
tree.root.right.right.right.right = new tree.Node(55);



tree.root.left.left.left = new tree.Node(3);



printLevelOrder(tree.root);

// Diameter of the tree

function getHeightTree(root){
    if( root == null || root == undefined){
        return 0;
    }
    if(getHeightTree(root.left) > getHeightTree(root.right)){
        return getHeightTree(root.left) + 1;
    }else{
        return getHeightTree(root.right) + 1;
    }
    
}

// process.stdout.write("\n\n" +getHeightTree(tree.root) );

function getDiameter(root){
    if(root == null || root == undefined){
        return 0;
    }
    var lHeight = getHeightTree(root.left);
    var rHeight = getHeightTree(root.right);

    var lDiameter = getDiameter(root.left);
    var rDiameter = getDiameter(root.right);

    return Math.max(lHeight+rHeight+1,Math.max(lDiameter,rDiameter));
}

process.stdout.write("\n\n"+getDiameter(tree.root));