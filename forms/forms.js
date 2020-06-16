'use strict'
                                                           //para probarlo se ejecuta con "node nombe de archivo"
var http = require('http').createServer(webServer),
	form = require('fs').readFileSync('./formulario.html'), //Código completamente plagiado xd
	util = require('util'),
	dataString = ''


function webServer(req, res)               //La idea es que lea la direeción y mande el formulario a la direeción del localhost...
{
	if(req.method  == 'GET')
	{
		res.writeHead(200, {'Content-Type' : 'text/html'})
		res.end(form)
	}

	if(req.method == 'POST')
	{
		req
			.on('data', function (data){
				dataString += data
			})
			.on('end', function (){
				var dataObject = querystring.parse(dataString),
					dataJSON = util.inspect(dataObject),
					templateString = `
Los datos que enviaste por POST como string son: ${dataString}
Los datos que enviaste por POST como objeto son: ${dataObject}
Los datos que enviaste por POST como JSON son: ${dataJSON}
				`
				console.log(templateString)
				res.end(templateString)     // este codigo deberai imprimir lo que se capture en el formulario
			})
	}                                 // el problema es que esta wea funciona independiente, quizá haya que agregarlo al app.js
}

http.listen(3001)

console.log('Servidor corriendo en http://localhost:3000/')
