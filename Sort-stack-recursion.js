// Given a stack, sort it using recursion. Use of any loop constructs like while, for..etc is not allowed. We can only use the following ADT functions on Stack S:

// is_empty(S)  : Tests whether stack is empty or not.
// push(S)	     : Adds new element to the stack.
// pop(S)	     : Removes top element from the stack.
// top(S)	     : Returns value of the top element. Note that this
//                function does not remove element from the stack.

const Stack = require('./Stack').Stack;

var unsortedStack = new Stack();

unsortedStack.push(26);
unsortedStack.push(21);
unsortedStack.push(30);
unsortedStack.push(19);
unsortedStack.push(40);

unsortedStack.printall();

var sortedStack = new Stack();
var tempStack = new Stack();

// while(!unsortedStack.isEmpty()){
// 	if(sortedStack.isEmpty()){
// 		sortedStack.push(unsortedStack.pop());
// 		continue;
// 	}
// 	while (	sortedStack.peek() < unsortedStack.peek() ){
// 		tempStack.push(sortedStack.pop());
// 	}
// 	sortedStack.push( unsortedStack.pop() );
// 	while( !tempStack.isEmpty() ){
// 		sortedStack.push(tempStack.pop());
// 	}
// }
process.stdout.write('\n');
// sortedStack.printall();

//move stack1 to stack2
const moveStack = function(stack1,stack2){
	stack2.push( stack1.pop() );
	if( !stack1.isEmpty() ){
		moveStack( stack1, stack2 );
	}
}


const sortStack = function(unsortedStack,sortedStack,tempStack){
	if( unsortedStack.isEmpty() ){
		return;
	}

	// sorted stack is empty push the top of unsorted stack to sorted stack
	if( sortedStack.isEmpty() ){
		sortedStack.push( unsortedStack.pop() );
		// check if tempStack is not empty, Push to sortedStack
		if( !tempStack.isEmpty() ){
			moveStack( tempStack , sortedStack );
		}			
		sortStack( unsortedStack, sortedStack, tempStack );
	}
	// if the sortedStack top is smaller then push it to temporary stack
	else if( sortedStack.peek() < unsortedStack.peek() ){
		tempStack.push( sortedStack.pop() );
		sortStack( unsortedStack, sortedStack, tempStack );
	}
	// if sortedStack is bigger push the top of unsorted stack to sorted stack 
	// and push tempStack to sorted Stack
	else if( sortedStack.peek() >= unsortedStack.peek()  ){
		sortedStack.push( unsortedStack.pop() );
		// check if tempStack is not empty, Push to sortedStack
		if( !tempStack.isEmpty() )
			moveStack( tempStack, sortedStack );
		sortStack( unsortedStack, sortedStack, tempStack );
	}
	return sortedStack;
}

sortedStack = sortStack(unsortedStack, sortedStack, tempStack);
sortedStack.printall();