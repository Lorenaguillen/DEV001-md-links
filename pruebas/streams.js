// esta funció es tan solo para crear un nuevo archivo
//const { writeFile } = require('fs/promises')

// con async await
// const createBigFile = async () => {
//     await writeFile('./data/bigfile.txt', 'hello Lore'.repeat(10000))
// }
// createBigFile()

// con then catch
// writeFile('./data/bigfile.txt', 'hello Lore'.repeat(10000))
//     .then((result) => console.log(result))
//     .catch(error => console.log(error))

const { createReadStream } = require('fs')

const stream = createReadStream('./pruebas/data/bigfile.txt', {
    encoding: 'utf-8'
})

// para que vaya desplegando la informacion del archivo por partes
stream.on('data', (chunk) => {
    console.log(chunk)
})

stream.on('end', () => {
    console.log('El archivo terminó')
})

stream.on('error', (error) => {
    console.log(error)
})