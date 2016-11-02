var http = require('http');

var server = http.createServer(function(request,response){
	console.log(request.url);
	response.end('Hello There');
})

server.listen(8080,function(){
	console.log('server listening on port 8080');
})