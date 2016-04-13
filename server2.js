var http = require('http');

http.createServer(function(request, response) {
	console.log("server creado");
	var headers = request.headers;
	var method = request.method;
	var url = request.url;
	var body = [];
	request.on('error', function(err) {
		console.error(err);
	}).on('data', function(chunk) {
		body.push(chunk);
	}).on('end', function() {
		body = Buffer.concat(body).toString();
		// At this point, we have the headers, method, url and body, and can now
		// do whatever we need to in order to respond to this request.
	});

	if (request.method === 'GET' && request.url === '/echo') {
		request.pipe(response);
	} else {
		response.statusCode = 404;
		response.end();
	}

	/*
	response.writeHead(200, {
		"Content-Type" : "text/html"
	});
	response.write("Hola Mundo 2");
	response.end();
	*/

}).listen(8000); // Activates this server, listening on port 8080.
