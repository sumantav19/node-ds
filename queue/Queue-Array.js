const Queue =  function(){
	this.front = 0;
	this.rear = -1;
	this.array = [];
	this.size = 0;
}
Queue.prototype.enqueue = function(data) {
	// body...
	this.array[++this.rear] = data;
	this.size++;
};

Queue.prototype.dequeue = function(first_argument) {
	// body...
	if( this.size !== 0 ){
		this.size--;
		return this.array[ this.front++ ]
	}

	return ;
};

// Test Queue;

var queue = new Queue();
console.log(queue.dequeue());
queue.enqueue(50);
console.log(queue.dequeue());
queue.enqueue(60);
queue.enqueue(70);
queue.enqueue(80);
queue.enqueue(90);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());