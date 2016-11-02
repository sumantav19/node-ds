// We have discussed space efficient implementation of 2 stacks in a single array.
 // In this post, a general solution for k stacks is discussed. Following is the detailed problem statement.

// Create a data structure kStacks that represents k stacks. Implementation of kStacks should use only one array, i.e., k stacks should use the same array for storing elements. Following functions must be supported by kStacks.

// push(int x, int sn) –> pushes x to stack number ‘sn’ where sn is from 0 to k-1
// pop(int sn) –> pops an element from stack number ‘sn’ where sn is from 0 to k-1
// Method 1 (Divide the array in slots of size n/k) 

const StackK = function  (k) {
	// body...
	this.stackArray = new Array( 20 );
	this.stackTopIndexArray = new Array( k );
	this.stackArrayTop = -1;
	this.Node = function( data , nextKey ){
		this.data = data;
		this.nextKey = nextKey;
	}

}

StackK.prototype.push = function(data,stackNumber) {
	// body...	
	this.stackArray[ ++this.stackArrayTop ] = new this.Node( data , this.stackTopIndexArray[stackNumber-1] );	
	this.stackTopIndexArray[ stackNumber - 1 ] = this.stackArrayTop;
};

StackK.prototype.pop = function(stackNumber) {
	// body...
	var tempNode =  this.stackArray[ this.stackTopIndexArray[ stackNumber - 1 ] ];
	this.stackTopIndexArray = this.stackArray[ this.stackTopIndexArray[ stackNumber - 1 ] ].nextKey || undefined;
	return tempDataNode.data || undefined;
};


//Testing the stack
var print = function(argument){
	if(argument)
		process.stdout.write( argument.toString()+'\n' );
}

