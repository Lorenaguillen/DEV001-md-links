#!/usr/bin/env node

const { mdLinks } = require('./md_link.js')

const path = process.argv[2];
console.log(path)
const options = process.argv.slice(3);
console.log(options)

const option = options.join(' ');
console.log(option)

if (options.length === 0) {
    mdLinks(path, { validate: false })
        .then(res => console.log(res))
} else if (options.length >= 1) {
    switch (option) {
        case '--stats --validate':
            mdLinks(path, { stats: true, validate: true })
                .then(res => {
                    console.log(`total: ${res.total} \nunique: ${res.unique} \nbroken: ${res.broken} `)
                })
            break;
        case '--validate':
            mdLinks(path, { validate: true }) // mdlinks es una promesa que debe consumirse en alguna parte
                .then(res => console.log(res))

            break;
        case '--stats': //stats nos marcará la estadística
            mdLinks(path, { stats: true })
                .then(res => console.log(`total: ${res.total} \nunique:${res.unique} `))

            break;
        default:
            console.log(mensaje('Does not valid'));
    }
} 

