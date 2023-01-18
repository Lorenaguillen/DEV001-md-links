const http = require('http');
// hemos creado el objeto archivos.js e importado con require
const archivos = require('../ruta/archivos.js')


// creamos el servidor
const servidor = http.createServer((req, res) => {
    // qué sucedera cuando el servidor reciba una solicitud
    // para ello implementaremos la propiedad method
    const { method } = req;

    // determinará lo que va a ocurrir. se puede usar switch o condicional
    switch (method) {
        case 'GET':
            // metodo GET para  tener acceso a los objetos
            // como estamos retornandolo no es necesario usar break
            return manejarSolicitudGET(req, res);
        case 'POST':
            return manejarSolicitudPOST(req, res);
        default:
            // en caso que el metodo no sea uno de los que hemos implementado
            console.log(`El metodo usado no puede manejarse por el servidor: ${method}`);
    }
});

//esta funcion es para el metodo GET y se usa para obtener informacion
function manejarSolicitudGET(req, res) {
    // con el path obtendremos el camino
    const path = req.url;

    if (path === '/') {
        // codigo 200 indica que la solicitud ha tenido exito
        res.statusCode = 200;
        return res.end('Mi primer servidor y API con Node.js')
        //para este caso obtendré el objeto completo de archivos.js
    } else if (path === '/archivos') {
        res.statusCode = 200;
        return res.end(JSON.stringify(archivos.infoArchivos));
        // en este caso obtendre un arreglo en lugar de un objeto
    } else if (path === '/archivos/carpeta1') {
        res.statusCode = 200;
        return res.end(JSON.stringify(archivos.infoArchivos.carpeta1));
    }

    res.statusCode = 404;
    return res.end('La página no existe');
}
// esta funcion es para el metodo POST y se usa para agregar informacion
function manejarSolicitudPOST(req, res) {
    const path = req.url;

    if (path === '/archivos/carpeta1') {
        res.statusCode = 200;
        return res.end('El servidor tiene una solicitud POST para /archivos/carpeta1');
    }
}



// el servidor escuchara desde el puerto 3000
const PUERTO = 3000;

servidor.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`)
})
