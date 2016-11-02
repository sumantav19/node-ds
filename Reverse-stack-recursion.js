// Reverse a stack using recursion
// You are not allowed to use loop constructs like while, for..etc, and you can only use the following ADT functions on Stack S:
// isEmpty(S)
// push(S)
// pop(S)



const Stack = require('./Stack').Stack;

var tempStack = new Stack();

//Takes two parameter
const reverseStack = function(stack,tempStack){
	// var tempStack = new Stack();

	//push to tempStack
	tempStack.push(stack.pop());

	// if stack is not empty call reverse Stack
	if ( !stack.isEmpty() ){
		// tempStack.push(stack.pop());
		// tempStack.push(reverseStack(stack));
		reverseStack(stack,tempStack);
	}
	// if(!stack.isEmpty())
	// 	reverseStack(stack);
	// return tempStack;
}

for(var i = 5 ; i >0 ; i--){
	tempStack.push(i);
}

var tempStack1 = new Stack();
tempStack.printall();

//Call by reference
reverseStack(tempStack,tempStack1);
tempStack1.printall();