// Length of the longest valid substring
// Given a string consisting of opening and closing parenthesis, 
//find length of the longest valid parenthesis substring.

// Examples:

// Input : ((()
// Output : 2
// Explanation : ()

// Input: )()())
// Output : 4
// Explanation: ()() 

// Input:  ()(()))))
// Output: 6
// Explanation:  ()(()))

const Stack = require('./Stack').Stack,
	data = process.argv[2];

var parenthesisStack = new Stack(), validCharaterLength = 0;

for (var index = 0; index < data.length ; index++ ){
	if( data[index] === '(' ){
		parenthesisStack.push(data[index]);
	}else if( data[index] === ')' ){
		if ( parenthesisStack.pop() === '(' ){
			validCharaterLength +=2;
		}
	}
}

process.stdout.write(validCharaterLength.toString());