// Implement Api Gateway for 4 server to follow the microservice architecture
// Methodology followed 
// First four node server are created 
// All the server are started in the call back function which is wrong. All the dependent server should start before the parent server starts
// On request the parent server the client sends a request to all the dependent server and wait for response
// On response event data parent server saves data locally
// On response end it emits a event childResponseEnd
// Listener listening to childResponseEnd increases the counter. Which checks wheather all server response has end
// After all the server has send there response serverResponseEnd event is triggered
// Listener listening to serverResponseEnd combines the response of all the child server and sends back to client

// const server1 = require('./server1');
// const server2 = require('./server2');
// const server3 = require('./server3');
// const server4 = require('./server4');
const http = require('http');
const querystring = require('querystring');
const cluster = require('cluster');
const EventEmitter = require('events').EventEmitter;

// Start all child server
// This is not required . Servers can be started manually but All the dependent server should start before parent server starts
// Server can be implement in any language
// function startAllServers(){	
// 	server1();
// 	// server2();
// 	// server3();
// 	// server4();
// }

// Dummy Data
var postData = querystring.stringify({
  'msg' : 'Hello World!'
});

if(cluster.isMaster){
	for(var i = 0 ; i < 4 ; i++){
		cluster.fork();
	}

	cluster.on('exit', (worker, code, signal) => {
	   	console.log(`worker ${worker.process.pid} died`);
	});
	
}else{

				// Parent Server creation or API Gateway
			const server = http.createServer(function(request,response){
				//Event definition
				var myEventEmitter = new EventEmitter();
				var allServerResponseData = '';
				var serverResponseCounter = 0;

				//To response url
				if(request.url === '/favicon.ico'){
					response.statusCode = 404;
					response.end();
					return;
				}

				//Sending request to server is independent of language on which server is implemented

				//for server1	

				const optionServer1 = {
				  		hostname: 'localhost',
						port: 3001,
						path: '/',
						method: 'GET',
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded',
							'Content-Length': Buffer.byteLength(postData)
						}
					}
				var server1DataBody = '';
				const req1 = http.request(optionServer1,function(response){
					
					response.on('data',function(chunk){
						server1DataBody += chunk;			
					})
					response.on('end',function(){
						// To emit an event end of response from server 1
						myEventEmitter.emit('childResponseEnd');
						// console.log('Server1 end');			
					})
				})


				//for server2
				const optionServer2 = {
				  		hostname: 'localhost',
						port: 3002,
						path: '/',
						method: 'GET',
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded',
							'Content-Length': Buffer.byteLength(postData)
						}
					};
				var server2DataBody = '';
				const req2 = http.request(optionServer2,function(response){
					response.on('data',function(chunk){
						server2DataBody += chunk;
					})
					response.on('end',function(){
						// To emit an event end of response from server 2
						myEventEmitter.emit('childResponseEnd');
						// console.log('Server2 end');			
					})
				})
				//for server3
				const optionServer3 = {
				  		hostname: 'localhost',
						port: 3003,
						path: '/',
						method: 'GET',
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded',
							'Content-Length': Buffer.byteLength(postData)
						}
					}
				var server3DataBody = '';
				const req3 = http.request(optionServer3,function(response){
					response.on('data',function(chunk){
						server3DataBody += chunk;
					})
					response.on('end',function(){
						// To emit an event end of response from server 3
						myEventEmitter.emit('childResponseEnd');
						// console.log('Server3 end');			
					})
				})
				//for server4
				const optionServer4 = {
				  		hostname: 'localhost',
						port: 3004,
						path: '/',
						method: 'GET',
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded',
							'Content-Length': Buffer.byteLength(postData)
						}
					}
				var server4DataBody = '';
				const req4 = http.request(optionServer4,function(response){
					response.on('data',function(chunk){
						server4DataBody += chunk;
					})
					response.on('end',function(){
						// To emit an event end of response from server 4
						myEventEmitter.emit('childResponseEnd');
						// console.log('Server4 end');			
					})
				})

				//Send request to child server or Multiple underlining server
				req1.write(postData);
				req1.end();
				req2.write(postData);
				req2.end();
				req3.write(postData);
				req3.end();
				req4.write(postData);
				req4.end();

				// Event listener listens to end of response from all the server
				myEventEmitter.on('serverResponseEnd',function(){

					// Merges the response of all the server and sends to client
					allServerResponseData = server1DataBody +' '+ server2DataBody +' '+ server3DataBody + ' ' +server4DataBody;
					response.end(allServerResponseData);
				})

				// Event Listener listens to end of response of any server
				myEventEmitter.on('childResponseEnd',function(){
					// Calculates the number of servers from which response have finished
					if(++serverResponseCounter === 4){
						myEventEmitter.emit('serverResponseEnd');
					}
				})
			}).listen(3005,function(){
				console.log('Parent server listeining on 3005');
			})
}









// //Starts the parent server
// server.listen(3005,function(){
// 	// Start all the server
// 	// startAllServers();
// 	console.log('Parent server listeining on 3005');
// })