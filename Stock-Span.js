// The stock span problem is a financial problem where we have a series of n daily price quotes for a stock and we need to calculate span of stock’s price for all n days. 
// The span Si of the stock’s price on a given day i is defined as the maximum number of consecutive days just before the given day, for which the price of the stock on the current day is less than or equal to its price on the given day.
// For example, if an array of 7 days prices is given as {100, 80, 60, 70, 60, 75, 85}, then the span values for corresponding 7 days are {1, 1, 1, 2, 1, 4, 6}

// Input:

// The first line of input contains an integer T denoting the number of test cases.
// The first line of each test case is N,N is the size of array.
// The second line of each test case contains N input C[i].

// Output:

// Print the span values.

// Constraints:

// 1 ≤ T ≤ 100
// 1 ≤ N ≤ 200
// 1 ≤ C[i] ≤ 800

// Example:

// Input
// 2
// 7
// 100 80 60 70 60 75 85
// 6
// 10 4 5 90 120 80

// Output
// 1 1 1 2 1 4 6
// 1 1 2 4 5 1

const Stack = require('./Stack').Stack;
//var data = [100,80,60,70,60,75,85];
var data = [10,4,5,90,120,80]
var stockPriceStack = new Stack();

var tempStack = new Stack();

//move stack 1 to stack 2
const moveStack = function( stack1 , stack2 ){
	if(stack1.isEmpty())
		return;
	stack2.push( stack1.pop() );
	moveStack( stack1 , stack2 );
}

for(var key in data){
	var count = 1;
	// put the first data into stack  or check if tempStack is not empty. move the Tempstack into stock
	if( stockPriceStack.isEmpty() ){
		// This check is not required
		tempStack.isEmpty() ?  ( stockPriceStack.push( data[ key ] ) , process.stdout.write( count + ' ' ) ): moveStack( tempStack , stockPriceStack );		
		continue;
	}	
	else if( data[ key ] >= stockPriceStack.peek() ){
		// Check consecutive stock price are less. Pop it out of stack if less and increase the count
		while( data[ key ] >= stockPriceStack.peek() ){
			tempStack.push( stockPriceStack.pop() );
			count++;
		}
		process.stdout.write(count + ' ');
		// after getting the count move the stack to previous state for checking for later data
		moveStack( tempStack , stockPriceStack );
		// push the recent data
		stockPriceStack.push( data[ key ] );
	}else {
		// if previous values is larger then the count is 1 
		process.stdout.write( count + ' ' );
		// push the recent data
		stockPriceStack.push( data[ key ] );
	}
}


