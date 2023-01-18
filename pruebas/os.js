const os = require('os')

// me da la informacion del usuario
//console.log(os.userInfo())

// me da el tiempo de conexion
//console.log(os.uptime())

// informacion del sistema operativo
//console.log(os.platform())

// informacion de la memoria total
//console.log(os.totalmem())

// informacion de la memoria disponible
// console.log(os.freemem())

// nos muestra una tabla para dentro colocar datos
console.table({
    os: os.platform(),
    version: os.release(),
    totalMemory: os.totalmem()
})