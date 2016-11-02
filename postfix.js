const Stack = require('./Stack').Stack;
//var data = process.argv[2];
var tempStack = new Stack();
var data = 'a+b*(c^d-e)^(f+g*h)-i';
var pushToStack = function(operator){
	if(tempStack.isEmpty()){
		tempStack.push(operator);
	}
	else if( operator === '(' ){
		tempStack.push(operator);
	}else if( operator === ')'){
		while( !tempStack.isEmpty() && tempStack.peek() !== '(' ){
			process.stdout.write( tempStack.pop() ); 
		}
		//process.stdout.write("poped \n");
		tempStack.pop();
	}else if( getOperatorPrecedence( operator ) >= getOperatorPrecedence( tempStack.peek() ) ){
		//process.stdout.write(operator + 'low\n');
		tempStack.push( operator );
	}
	else if( getOperatorPrecedence( operator ) < getOperatorPrecedence( tempStack.peek() ) ){
		//console.log(operator);
		while( !tempStack.isEmpty() && getOperatorPrecedence( operator ) < getOperatorPrecedence( tempStack.peek() ) ){
			process.stdout.write( tempStack.pop() ); 
		}
		tempStack.push(operator);
	}
}	

var getOperatorPrecedence = function (operator)  {
	// body...
	var returnValue = 0;
	switch (operator){
		case '+':
			returnValue = 2;
			break;
		case '-': 
			returnValue = 1;
			break;
		case '*':
			returnValue = 3;
			break;
		case '/':
			returnValue = 4;
			break;
		case '^':
			returnValue = 5;
			break;
		case undefined:	
		case '(':

			returnValue =  0;
			
	}
	return returnValue;
}



for(var i = 0 ; i < data.length ; i++ ){
	data[i].match(/[0-9a-z]/) ? process.stdout.write(data[i]) : pushToStack(data[i]);
}
tempStack.printall();
