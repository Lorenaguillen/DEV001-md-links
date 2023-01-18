// const fs = require('fs')
// //readdir lee el directorio y process.cwd da el actual directorio de trabajo
// fs.readdir(process.cwd(), (err, filenames) => { //process.cwd es similar a __dirname
//     if (err) {
//         console.log(err)
//         return
//     }

//     for (let filename of filenames) {
//         fs.promises.lstat(filename) //lstat nos dará el objeto de estadísticas para cada directorio
//             //si se resuelve la promesa, se obtiene:
//             .then(stats => {
//                 if (stats.isDirectory()) {
//                     console.log(`${filename} ---------> Directorio`)
//                 } else {
//                     console.log(`${filename} ---------> Archivo`)
//                 }
//             })
//             .catch(err => { //si la promesa es rechazada
//                 console.log(err)
//             })
//     }
// })
