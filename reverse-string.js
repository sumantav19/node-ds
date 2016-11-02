const Stack = require('./Stack').Stack;
var data = process.argv[2];
var tempStack = new Stack();

for(var i = 0 ; i < data.length ; i++ ){
	tempStack.push(data[i]);	
}

tempStack.printall();