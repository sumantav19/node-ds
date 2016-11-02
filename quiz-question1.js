const Stack = require('./Stack-Array').Stack;

var tempStack = new Stack(), n = process.argv[2];
// console.log(process.argv);
 // n=20;
debugger;
while( n > 0 ){
	tempStack.push( n % 2 );
	n = Number.parseInt( n / 2 );
}

while( !tempStack.isEmpty() ){
	process.stdout.write( tempStack.pop().toString() );
}