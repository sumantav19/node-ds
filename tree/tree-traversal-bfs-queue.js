const Tree = require('./Tree');
const Queue = require('../queue/Queue');


var tree = new Tree(1);
tree.root.left = new tree.Node(2);
tree.root.right = new tree.Node(3);
tree.root.right.left = new tree.Node(7);
tree.root.left.left = new tree.Node(4);
tree.root.left.right = new tree.Node(5);
tree.root.left.left.left = new tree.Node(6);


var traversalQueue = function(root){
	if( root === undefined ){
		return ;
	}
	var queue = new Queue();
	queue.enqueue(root);
	var node = undefined;
	while(!queue.isEmpty()){
		node = queue.dequeue();
		if( node.left )
			queue.enqueue(node.left);
		if( node.right )
			queue.enqueue(node.right);
		process.stdout.write(node.getData().toString());
	}

}

traversalQueue(tree.root);