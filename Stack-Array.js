/*
* Stack using Array
*/

var Stack = function () {
	// body...
	this.top = -1;
	this.dataArray = [];
}

Stack.prototype.isEmpty = function(){
	if(this.top === -1)
		return true;

	return false;
}
Stack.prototype.push = function(data) {
	// body...	
	this.top +=1;
	this.dataArray[this.top] = data;
};

Stack.prototype.pop = function() {	
	// body...
	if(this.top === -1){		
		return;
	}
	var tempData = this.dataArray[this.top];
	this.top = this.top - 1;
	// console.log(tempData);
	return tempData;
};

Stack.prototype.peek = function() {
	// body...
	if( this.top === -1 )
		return;
	return this.dataArray[this.top];
};

Stack.prototype.printall = function  () {
	// body...
	if( this.top === -1){
		process.stdout.write("Stack Empty \n");
	}	
	var tempKey = this.top;
	while( this.dataArray[tempKey] !== undefined ){

		// toString as process stdout write only take buffer or string. Not integer
		process.stdout.write( this.dataArray[tempKey].toString() + ',' );
		//console.log(tempNode.data);
		tempKey--;
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
// 	tempStack.printall();
// 	process.stdout.write('\nRequired stack \n');
// 	process.stdout.write(tempStack.pop().toString()+'\n');	
// 	tempStack.printall();
// 	// console.log(tempStack.pop());
// 	// // process.stdout.write('\n'+ tempStack.pop()+' popped out of stacked\n');
// 	// process.stdout.write('Required stack after pop \n');
// 	// //console.log('Required stack after pop');
// 	// tempStack.printall();
// 	process.stdout.write('\n'+ tempStack.peek() + ' peeked into stack\n' );
// 	process.stdout.write('Required stack after peek \n');
// 	//console.log("Required Stack after peek");
// 	tempStack.printall();
// }

// testStack();

exports.Stack = Stack;