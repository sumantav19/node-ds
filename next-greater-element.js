// Given an array A [ ] having distinct elements, the task is to find
// the next greater element for each element of the array in order of
// their appearance in the array. If no such element exists, output -1

// Input:
// The first line of input contains a single integer T denoting the number of test cases.Then T test cases follow. Each test case consists of two lines. The first line contains an integer N denoting the size of the array. The Second line of each test case contains N space separated positive integers denoting the values/elements in the array A[ ].
 
// Output:
// For each test case, print in a new line, the next greater element for each array element separated by space in order.

// Constraints:
// 1<=T<=100
// 1<=N<=1000
// 1<=A[i]<=1000

// Example:
// Input
// 1
// 4
// 1 3 2 4 

// Output
// 3 4 4 -1

// Explanation
// In the array, the next larger element to 1 is 3 , 3 is 4 , 2 is 4 and for 4 ? since it doesn't exist hence -1.

// **For More Examples Use Expected Output**

const Stack = require('./Stack').Stack;

var tempStack = new Stack();

var tempArray = [];



// var data = "1 3 2 4";
// for (var i = 0; i < data.length ; i++){
// 	data[i].match(/[0-9]/) !== null ? tempArray.push(Number.parseInt(data[i])) : '';	
// }
tempArray = [6,3,5,1];
//tempArray = [11, 13, 21, 3];
//console.log(tempArray.length);
tempStack.push(tempArray[0]);
var next;
var count = 0;
for(var key = 1; key < tempArray.length ; key++){
 	next = tempArray[key];
 	//console.log(next);
 	if( !tempStack.isEmpty() ){ 		
 		while( tempStack.peek() <  next){
 			//tempStack.pop();
 			process.stdout.write( tempStack.pop() + ' --> '+next + '\n' );
 			if(tempStack.isEmpty())
 				break;
 		}		
 	}
 	tempStack.push(next); 	
}
while(tempStack.peek()){
	process.stdout.write(tempStack.pop() + ' --> '+'-1'+'\n');
}