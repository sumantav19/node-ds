// Implement two stacks in an array
// Create a data structure twoStacks that represents two stacks. Implementation of twoStacks should use only one array, i.e., both stacks should use the same array for storing elements. Following functions must be supported by twoStacks.

// push1(int x) –> pushes x to first stack
// push2(int x) –> pushes x to second stack

// pop1() –> pops an element from first stack and return the popped element
// pop2() –> pops an element from second stack and return the popped element

// Implementation of twoStack should be space efficient.

var Stack = function( size ){
	this.stackArray = new Array(size);
	this.top1 = -1;
	this.top2 = size;
	this.stackSize = size;
}

Stack.prototype.isEmpty1 = function() {
	// body...
	if( this.top1 === -1 ){
		return true;
	}
	return false;
};

Stack.prototype.isEmpty2 = function() {
	// body...
	if( this.top2 === this.stackSize ){
		return true;
	}
	return false;
};

Stack.prototype.isFull = function(){
	if( this.top1 === (this.top2-1) ){
		return true;
	}
	return false;
}

Stack.prototype.push1 = function(data) {
	// body...
	if( this.isFull() ){
		process.stdout.write("Stack full\n");
		return;
	}
	this.stackArray[ ++this.top1 ] = data;
};

Stack.prototype.push2 = function(data) {
	// body...
	if( this.isFull() ){
		process.stdout.write("Stack full\n");
		return;
	}
	this.stackArray[ --this.top2 ] = data;
};

Stack.prototype.pop1 = function(first_argument) {
	// body...
	if( this.isEmpty1() ){
		process.stdout.write("Stack Empty \n");
		return;
	}
	return this.stackArray[ this.top1-- ];
};

Stack.prototype.pop2 = function(first_argument) {
	// body...
	if( this.isEmpty2() ){
		process.stdout.write("Stack Empty \n");
		return;
	}
	return this.stackArray[ this.top2++ ];
};


//Testing the stack
var print = function(argument){
	if(argument)
		process.stdout.write( argument.toString()+'\n' );
}
var tempStack = new Stack(5);
print("Test if stack is empty");
print(tempStack.isEmpty1());
print(tempStack.isEmpty2());
tempStack.pop1();
tempStack.pop2();
print("Push to stack1");
tempStack.push1(1);
tempStack.push1(2);
print("push to stack2");
tempStack.push2(5);
tempStack.push2(4);
print("pop from stack 1");
print(tempStack.pop1());
print(tempStack.pop1());
print(tempStack.pop1());
print("pop for stack 2");
print(tempStack.pop2());
print(tempStack.pop2());
print(tempStack.pop2());
print("Check if stack is full");
tempStack.push1(0);tempStack.push1(1);tempStack.push1(2);
tempStack.push2(4);tempStack.push2(3);
tempStack.push2(8);
tempStack.push1(9);
