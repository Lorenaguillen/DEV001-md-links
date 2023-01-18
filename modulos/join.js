
// //const fs = require('fs');
// const path = require("path");

// // el método path.join une los segmentos de ruta en una sola ruta
// // de esta forma obtengo la ruta absoluta del archivo final bigfile.txt

// //const pathArchivo = path.join(__dirname, './pruebas/data/bigfile.txt');
// //const pathArchivo = path.join(__filename, './pruebas/data/bigfile.txt');
// //console.log(pathArchivo);

// const ruta1 = path.join('Usuario', 'Referencia', 'file', 'bigfile.txt');
// console.log(ruta1)

// // const ruta2 = path.join('Usuario', {} , 'bigfile.txt');
// // console.log(ruta2)

// const ruta3 = path.join('Usuario', 'Referencia', 'file', '..', 'bigfile.txt');
// console.log(ruta3)



// // me da el objeto global y me dará la ruta absoluta del archivo absoluta.js

// //console.log(__dirname)
// //console.log(__dirname + './absoluta.js')

// // const path = require("path");
// // console.log(path.join(__dirname, "./absoluta.js"));

// // me da el objeto global y me dará la ruta completa incluyendo el archivo
// //console.log(__filename)

// // me dará un objeto con muchas propiedades. Nos permite separar una aplicación de js en múltiples archivos
// //console.log(module)

// // objeto require. Es una función que permite importar los archivos separados
// //console.log(require)