var http = require('http');

//variável http

//conteudo que será enviado ao servidor na função anônima
var requisicao = function(request,response){
    response.writeHead(200, {"Content-Type" : "text/html"});
    response.write("<h1> Olá Mundo serei exibido no browser </h1>");
    response.end();
}

var server = http.createServer(requisicao);

var resultado = function(){
    console.log('Servidor em funcionamento');
}

server.listen(3000,resultado);