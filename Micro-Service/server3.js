const http = require('http');
const cluster = require('cluster');
const Port = 3003;
// var server = http.createServer(function(request,response){
// 	response.statusCode = 200;
// 	response.setHeader('Content-Type','text/plain');
// 	response.end("Hello from server 3");
// })


// var runServer3 = function(){
// 	server.listen(Port,function(){
// 		process.stdout.write('Server3 listening on '+Port+'\n');
// 	})
// }

// module.exports = runServer3;

var runServer3 = function(){
	if( cluster.isMaster ){
		// Fork workers.
		for (var i = 0; i < 4 ; i++) {
	    	cluster.fork();
	  	}
	  	cluster.on('exit', (worker, code, signal) => {
	    	console.log(`worker ${worker.process.pid} died`);
	  	});

	}else{
		http.createServer(function(request,response){
			response.statusCode = 200;
			response.setHeader('Content-Type','text/plain');
			response.end("Hello from server 3");
		}).listen(Port,function(){
			process.stdout.write('Server3 listening on '+Port+'\n');
		});
	}
}

// module.exports = runServer3;
runServer3();