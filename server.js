/**
 * New node file
 */
var http = require("http");
var url = require("url");



function iniciarServer(route, manejador){

	http.createServer(function(request, response) {
		
		var pathname = url.parse(request.url).pathname;
		console.log("Peticion para " + pathname + " recibida");
		
		route(manejador,pathname);
		
		console.log("evento callback");
		response.writeHead(500, {"Content-Type": "text/html"});
		response.write("Hola Mundos");
		response.end();
		
	}).on("request", function(request, response){
		console.log("Peticion NUEVA");
	})
	.listen(8000);
	
	
	console.log("server iniciado");
}

exports.iniciarServer = iniciarServer;
