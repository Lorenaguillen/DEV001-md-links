// si abro el local host en el puerto 3000 se ejecutara el mensaje 'Hola Lorenita'

const http = require('http')

http.createServer((request, response) => {

    // request nos abrirá un archivo con mucha informacion, por eso filtramos solo con url
    console.log(request.url)
    if (request.url === '/contacto') {
        response.write('Estos son los contactos')
        return response.end()
    }

    response.write('Hola Lorenita')
    response.end()
}).listen(3000)

console.log('Servidor escucha el puerto 3000')