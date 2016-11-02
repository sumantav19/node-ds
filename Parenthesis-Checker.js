// Given an expression string exp, examine whether the pairs and the orders of “{“,”}”,”(“,”)”,”[“,”]” are correct in exp.
// For example, the program should print 'balanced' for exp = “[()]{}{[()()]()}” and 'not balanced' for exp = “[(])”

 

// Input:

// The first line of input contains an integer T denoting the number of test cases. 
// Each test case consist of a string of expression, in a separate line.

// Output:

// Print 'balanced' without quotes if pair of parenthesis are balanced else print 'not balanced' in a separate line.


// Constraints:

// 1 ≤ T ≤ 30
// 1 ≤ |s| ≤ 100


// Example:

// Input:
// 3
// {([])}
// ()
// ()[]

// Output:
// balanced
// balanced
// balanced

const Stack = require('./Stack').Stack;
//var data = "{([])}";
var data = "()";
//var data = "()[]";

var tempStack = new Stack();
var parenthesisChecker = function(){

}
var balanced = true;
for(var i = 0 ; i < data.length ; i++ ){
	//console.log(data[i] +' '+ tempStack.peek());
	switch (data[i]){
		case '{':
		case '(':
		case '[':
			tempStack.push(data[i]);
			break;
		case  '}':
			tempStack.peek() === '{' ? tempStack.pop() : (process.stdout.write('Not balanced'),balanced=false);
			break;
		case  ')':
			tempStack.peek() === '(' ? tempStack.pop() :  (process.stdout.write('Not balanced'),balanced=false);
			break;
		case  ']':
			tempStack.peek() === '[' ? tempStack.pop() :  (process.stdout.write('Not balanced'),balanced=false);
			break;
	}
	if (balanced === false){
		break;
	}	
}K
if(balanced === true){
	process.stdout.write('balanced');
}