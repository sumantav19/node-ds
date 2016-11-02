// Unlike linear data structures (Array, Linked List, Queues, Stacks, etc) which have only one logical way to traverse them, trees can be traversed in different ways. Following are the generally used ways for traversing trees.
// Example
// 				    1                
// 				  /   \             
// 				 2     3           
// 				/ \	  
// 			   4   5
// Depth First Traversals:
// (a) Inorder
// (b) Preorder
// (c) Postorder

// Breadth First or Level Order Traversal
// Please see this post for Breadth First Traversal.

// Inorder Traversal:

// Algorithm Inorder(tree)
//    1. Traverse the left subtree, i.e., call Inorder(left-subtree)
//    2. Visit the root.
//    3. Traverse the right subtree, i.e., call Inorder(right-subtree)
// Uses of Inorder
// In case of binary search trees (BST), Inorder traversal gives nodes in non-decreasing order. To get nodes of BST in non-increasing order, a variation of Inorder traversal where Inorder itraversal s reversed, can be used.
// Example: Inorder traversal for the above given figure is 4 2 5 1 3.

const Tree = require('./Tree');

var tree = new Tree(1);
tree.root.left = new tree.Node(2);
tree.root.right = new tree.Node(3);
tree.root.left.left = new tree.Node(4);
tree.root.left.right = new tree.Node(5);

const inOrderTreeTraversal =  function(Node){
	if( Node ){
		if( Node.left )
			inOrderTreeTraversal( Node.left );

		process.stdout.write( Node.getData().toString() );

		if( Node.right )
			inOrderTreeTraversal( Node.right );
	}
}

inOrderTreeTraversal(tree.root);

process.stdout.write('\n');


// Preorder Traversal:

// Algorithm Preorder(tree)
//    1. Visit the root.
//    2. Traverse the left subtree, i.e., call Preorder(left-subtree)
//    3. Traverse the right subtree, i.e., call Preorder(right-subtree) 
// Uses of Preorder
// Preorder traversal is used to create a copy of the tree. Preorder traversal is also used to get prefix expression on of an expression tree. Please see http://en.wikipedia.org/wiki/Polish_notation to know why prefix expressions are useful.
// Example: Preorder traversal for the above given figure is 1 2 4 5 3.

const preOrderTreeTraversal =  function(Node){
	if( Node ){
		
		process.stdout.write( Node.getData().toString() );

		if( Node.left )
			preOrderTreeTraversal( Node.left );

		

		if( Node.right )
			preOrderTreeTraversal( Node.right );
	}
}


preOrderTreeTraversal( tree.root ); 

process.stdout.write('\n');

// Postorder Traversal:

// Algorithm Postorder(tree)
//    1. Traverse the left subtree, i.e., call Postorder(left-subtree)
//    2. Traverse the right subtree, i.e., call Postorder(right-subtree)
//    3. Visit the root.
// Uses of Postorder
// Postorder traversal is used to delete the tree. Please see the question for deletion of tree for details. Postorder traversal is also useful to get the postfix expression of an expression tree. Please see http://en.wikipedia.org/wiki/Reverse_Polish_notation to for the usage of postfix expression.

// Practice Postorder Traversal 

// Example: Postorder traversal for the above given figure is 4 5 2 3 1.


const postOrderTreeTraversal =  function(Node){
	if( Node ){
		
		if( Node.left )
			postOrderTreeTraversal( Node.left );

		if( Node.right )
			postOrderTreeTraversal( Node.right );

		process.stdout.write( Node.getData().toString() );
	}
}


postOrderTreeTraversal( tree.root ); 