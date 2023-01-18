// const fs = require('fs');

// obtenerRuta();
// //esto funciona declarandolo antes porque es una funcion y no una arrow function
// function obtenerRuta() {
//     console.log('\nBuscando en directorio:');
//     fs.readdirSync(__dirname).forEach(file => { //se está trabajando con readdir síncrono para que aparezca primero que las rutas
//         console.log(file);
//     });
//     // fs.promises.readdir(__dirname)
//     //     .then(filenames => {
//     //         for (let filename of filenames) {
//     //             console.log(filename)
//     //         }
//     //     })

//     //     .catch(err => {
//     //         console.log(err)
//     //     })

//     console.log('\n')
// }

// const existe = fs.existsSync('./files/data/bigfile.txt');
// console.log('./files/data/bigfile.txt existe:', existe);

// const existe2 = fs.existsSync('casa.md');
// console.log('casa.md existe:', existe2);




