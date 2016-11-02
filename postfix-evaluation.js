const Stack = require('./Stack').Stack;
var data = process.argv[2];
var tempStack = new Stack();

var evaluate = function  (operator) {
	// body...
	var operand1 = Number.parseInt(tempStack.pop());
	var operand2 = Number.parseInt(tempStack.pop());
	var result = 0;
	switch (operator){
		case '+' : result = operand1 + operand2; break;
		case '-' : result = operand1 - operand2; break;
		case '*' : result = operand1 * operand2; break;
		case '/' : result = operand1 / operand2; break;
	}
	
	//console.log(result.toString());
	tempStack.push(result.toString());
	//tempStack.printall();
}

for(var i = 0 ; i < data.length ; i++ ){

	data[i].match(/[0-9]/) ? tempStack.push(data[i]) : evaluate(data[i]);
	//tempStack.printall();	
}
tempStack.printall();
