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
	var nodeCount = 0;
	while(1){		
		nodeCount = queue.size;
		if(nodeCount === 0)
			break;
		// console.log(nodeCount);
		while( nodeCount > 0){

			var tempNode = queue.dequeue();

			process.stdout.write(tempNode.getData()+' ');

			if( tempNode.left !== undefined )
				queue.enqueue(tempNode.left);
			if( tempNode.right !== undefined )
				queue.enqueue(tempNode.right);		

			nodeCount--;	
		}
		process.stdout.write('\n');
	}

}

traversalQueue(tree.root);