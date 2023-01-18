// const fs = require('fs');

// // fs.readdir('./../DEV001-MD-LINKS/', (error, carpetas) => {
// //     if (error) {
// //         console.log(error);
// //     }
// //     // para cada archivo que se encuentra en este arreglo de files, imprimira su contenido
// //     carpetas.forEach(carpeta => {
// //         console.log(carpeta);
// //     });
// // });

// // fs.promises.readdir(process.cwd())
// //     .then(filenames => {
// //         for (let filename of filenames) {
// //             console.log(filename)
// //         }
// //     })

// //     .catch(err => {
// //         console.log(err)
// //     })

// // de esta tercera forma me da el mismo resultado que en los anteriores
// const targetDir = process.argv[2] || __dirname

// fs.promises.readdir(targetDir)
//     .then(filenames => {
//         for (let filename of filenames) {
//             console.log(filename)
//         }
//     })

//     .catch(err => {
//         console.log(err)
//     })
