const Queue = function  () {
	// body...
	this.front = undefined;
	this.rear = undefined;
	this.size = 0;
	this.Node = function(data){
		this.data = data;
		this.next = undefined;
	}

	this.Node.prototype.getNext = function() {
		// body...
		return this.next;
	};

	this.Node.prototype.setNext = function(next){
		// body...
		this.next = next;
	}

	this.Node.prototype.getData = function(){
		// body...
		return this.data;
	}
}

Queue.prototype.dequeue = function() {
	// body...
 	var tempData = undefined;
 	if(this.front) {
 		tempData =  this.front.data;
 		this.front = this.front.next;
 		this.size -= 1;
 	}
 	
 	if( !this.front ){
 		this.rear = this.front;
 		this.size = 0;
 	}
 	return tempData;

};

Queue.prototype.enqueue = function(data) {
	// body...
	if( this.rear ){
		this.rear.next =  new this.Node( data );
		this.rear = this.rear.next;
		this.size +=1;
	}else{
		this.rear = new this.Node( data );		
		this.front = this.rear;
		this.size = 1;
	}
};

Queue.prototype.isEmpty = function() {
	// body...
	if(this.front === undefined){
		return true;
	}
	return false;
};

//Test queue
// var queue = new Queue();
// console.log(queue.dequeue());
// queue.enqueue(50);
// console.log("Size = "+ queue.size);
// console.log(queue.dequeue());
// console.log("Size = "+ queue.size);
// queue.enqueue(60);
// queue.enqueue(70);
// queue.enqueue(80);
// queue.enqueue(90);
// console.log("Size = "+ queue.size);
// console.log(queue.dequeue());
// console.log("Size = "+ queue.size);
// console.log(queue.dequeue());
// console.log(queue.dequeue());

module.exports = Queue;