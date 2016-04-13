/**
 * New node file
 */
var server = require('./server');
var router = require('./router');
var peticiones = require("./peticiones");


var manejador = {};

manejador["/"] = peticiones.home;
manejador["/login"] = peticiones.login;
manejador["/logout"] = peticiones.logout;


server.iniciarServer(router.route, manejador);