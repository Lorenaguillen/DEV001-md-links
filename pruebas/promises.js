const { readFile } = require('fs/promises')
//const { promisify } = require('util')

//const readFilePromisify = promisify(readFile)

// const getText = (pathFile) => {
//     return new Promise(function (resolve, reject) {
//         readFile(pathFile, 'utf-8', (err, data) => {
//             if (err) {
//                 reject(err)
//             }
//             resolve(data)
//         })
//     })
// }


// la nueva promesa me permite escribir la sintaxis then y catch
readFile('./data/fourth.txt', 'utf-8')
    .then((result) => console.log(result))
    .then(() => readFile('./data/first.txt', 'utf-8'))
    .then(result => console.log(result))
    .catch(error => console.log(error))


// async function read() {
//     try {
//         const result = await readFile('./data/first.txt', 'utf-8');
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

// read();