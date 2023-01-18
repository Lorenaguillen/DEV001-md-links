// // este archivo se conecta con la carpeta data

// const fs = require('fs')

// // toda esta explicacion es trabajando de manera síncrona

// // utf-8 convierte el texto en string, sino sale como buffer
// // const primero = fs.readFileSync('./data/first.txt', 'utf-8')
// // // en este caso no agrego el utf-8, pero en console.log indico que lo convertiré en String
// // const segundo = fs.readFileSync('./data/second.txt')

// // console.log(primero)
// // console.log(segundo.toString())

// // // este comando crea el archivo desde acá
// // fs.writeFileSync('./data/third.txt', 'Hola Lorenitititita 3')

// // // de esta forma tambien puedo crear otro archivo
// // const cuarto = 'Lorena 4'
// // fs.writeFileSync('./data/fourth.txt', cuarto)
// // console.log(cuarto)



// // aqui empezamos a trabajar de manera asíncrona
// // estas son formas de leer datos, archivos
// fs.readFile('./files/data/first.txt', (error, data) => {
//     if (error) {
//         console.log(error);
// }
// console.log(data.toString())
// })
