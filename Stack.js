/*
* Stack using linked list
*/

var Stack = function () {
	// body...
	this.top = undefined;
	this.Node = function  (data) {
		// body...
		this.data = data;
		this.node = undefined;
	}
}

Stack.prototype.isEmpty = function(){
	if(this.top === undefined)
		return true;

	return false;
}
Stack.prototype.push = function(data) {
	// body...
	var tempNode = new this.Node(data);	
	tempNode.node = this.top;
	this.top = tempNode;
};

Stack.prototype.pop = function() {
	// body...
	if(!this.top){		
		return;
	}
	var tempNode = this.top;
	this.top = this.top.node;
	return tempNode.data;
};

Stack.prototype.peek = function() {
	// body...
	if(!this.top)
		return;
	return this.top.data;
};

Stack.prototype.printall = function  () {
	// body...
	if(!this.top){
		return;
	}
	var tempNode = this.top;
	while(tempNode!=null){

		// toString as process stdout write only take buffer or string. Not integer
		process.stdout.write(tempNode.data.toString()+',');
		//console.log(tempNode.data);
		tempNode = tempNode.node;
	}
}

// var testStack = function(){
// 	var tempStack = new Stack();
// 	tempStack.printall();
// 	//process.stdout.write('No node in stack yet');
// 	console.log('No node in stack yet');
// 	tempStack.push(4);
// 	tempStack.push(5);
// 	tempStack.push(6);
// 	process.stdout.write('Required stack \n');
// 	//console.log('Required Stack');
// 	tempStack.printall();
// 	process.stdout.write(tempStack.pop()+' popped out of stacked\n');
// 	process.stdout.write('Required stack after pop \n');
// 	//console.log('Required stack after pop');
// 	tempStack.printall();
// 	process.stdout.write( tempStack.peek() + ' peeked into stack\n' );
// 	process.stdout.write('Required stack after peek \n');
// 	//console.log("Required Stack after peek");
// 	tempStack.printall();
// }

// testStack();

module.exports = Stack;