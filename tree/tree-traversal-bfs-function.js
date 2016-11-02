const Tree = require('./Tree');
// const queue = require('../queue/Queue');


var tree = new Tree(1);
tree.root.left = new tree.Node(2);
tree.root.right = new tree.Node(3);
tree.root.right.left = new tree.Node(7);
tree.root.left.left = new tree.Node(4);
tree.root.left.right = new tree.Node(5);
tree.root.left.left.left = new tree.Node(6);

// METHOD 1 (Use function to print a given level)

// Algorithm:
// There are basically two functions in this method. One is to print all nodes at a given level (printGivenLevel), and other is to print level order traversal of the tree (printLevelorder). printLevelorder makes use of printGivenLevel to print nodes at all levels one by one starting from root.

// Function to print level order traversal of tree
// printLevelorder(tree)
// for d = 1 to height(tree)
//    printGivenLevel(tree, d);

// /*Function to print all nodes at a given level*/
// printGivenLevel(tree, level)
// if tree is NULL then return;
// if level is 1, then
//     print(tree->data);
// else if level greater than 1, then
//     printGivenLevel(tree->left, level-1);
//     printGivenLevel(tree->right, level-1);


var printLevelOrder = function(root){
	for (var d = 1; d <= calculateHeight(root) ; d++ ){
		printGivenLevel(root,d);
		process.stdout.write('\n');
	}
}

var calculateHeight = function(root){
	if(root === undefined)
		return 0;
	else{
		var lheight = calculateHeight(root.left);
		var rheight = calculateHeight(root.right);

		if( lheight >=  rheight){
			return lheight + 1;
		}else{
			return rheight + 1;
		}
	}
}

var printGivenLevel = function( root, level ){
	if(root === undefined){
		return;
	}

	if( level === 1 ){
		process.stdout.write( root.getData().toString() );
	}else if( level > 1 ){
		printGivenLevel( root.left , level-1);
		printGivenLevel( root.right , level-1);
	}
}


printLevelOrder(tree.root);