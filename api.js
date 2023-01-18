//secuencia del flujograma API
const fs = require('fs');
const path = require('path');

// 1. Comprobar si la ruta es válida
const valid = (myRoute) => {
    return fs.existsSync(myRoute)
};

// 2. Comprobar si la ruta es absoluta
const absolute = (myRoute) => {
    return path.isAbsolute(myRoute);
};

// 3. Convierte una ruta relativa en absoluta
const resol = (myRoute) => {
    return path.resolve(myRoute)
};

// 4. Comprobar si el path es un directorio
const directory = (myRoute) => {
    return fs.statSync(myRoute).isDirectory()
};

// 4. Comprobar si el path es un archivo
// const file = (myRoute) => {
//     return fs.statSync(myRoute).isFile()
// };

// 5. Recorrer y leer los directorios
const read = (myRoute) => {
    return fs.readdirSync(myRoute)
};

// 6. Recorrer y leer los archivos
const readFiles = (myRoute) => {
    return new Promise((res, rej) => { //debe ser asíncrona
        fs.readFile(myRoute, 'utf-8', (error, data) => {
            if (error) {
                rej(error);
            }
            res(data);
        });
    });
};

// 7. Encontrar archivos con extensiones .md 
// const extention = (myRoute) => {
//     path.extname(myRoute) === '.md';
// };

// 8. Filtrar los archivos con extensión .md
const filt = (myRoute) => {
    return path.extname(myRoute)
};

// 9. 
//const format = (route) => route.replace(/\\/g, '/');


// La expresión regular es un conjunto de caracteres que forma un patrón de búsqueda. En este caso para encontrar los links
// test devuelve si es true o false al buscar el link / exec devuelve un arreglo de la búsqueda
// /g = para que la búsqueda sea global / /i = ignora entre mayúsculas y minúsculas

//const regGet = /\[([^\[]+)\](\(.*\))/gm;
//const regGetLinks = /(\(https?:\/\/.*\))/gm;
//const regGetLinks2 = /\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g;
//const regGetText = /\[([^\[]+)\]/gm


// AHORA DEBEMOS OBTENER TODOS LOS LINKS DE LOS ARCHIVOS .MD
const getTotalLinks = (myRoute) => {
    return new Promise((res, rej) => {
        const links = [];
        readFiles(myRoute)
            .then((data) => {
                const regex = /\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g;
                let match = regex.exec(data);
                while (match !== null) {
                    links.push({
                        href: match[2],
                        text: match[1],
                        file: myRoute,
                    });
                    match = regex.exec(data);
                }
                res(links);
            })
            .catch((error) => rej(error));
    });
}

// FUNCIÓN PARA VALIDAR LINK CON PETICIONES HTTP
const validLinks = (urls) => {
    return Promise.all(urls.map((arrLinks) => {
        return fetch(arrLinks.href)
            .then((res) => {
                const linkResult = {
                    ...arrLinks,
                    status: res.status,
                    ok: (res.status >= 200) && (res.status <= 399) ? 'ok' : 'fail'
                }
                return linkResult;
            })
            .catch(() => {
                return {
                    ...arrLinks,
                    status: 'Broken file',
                    ok: 'fail',
                }
            })
    })
    );
}


const statLinks = (urls) => {
    const extractHref = urls.map((el) => el.href);
    const hrefRep = new Set(extractHref)
    
    return {
        total: extractHref.length,
        unique: hrefRep.size
    }
};
const broken = (urls) => {
    const brokenLinks = urls.filter((e) => e.ok === 'fail');
    return {
        total: statLinks(urls).total,
        unique: statLinks(urls).unique,
        broken: brokenLinks.length
    }
}






module.exports = {
    valid, absolute, resol, directory, read, readFiles, filt, getTotalLinks, validLinks, statLinks, broken,
};

