const { valid, absolute, resol, directory, read, readFiles, filt, getTotalLinks, validLinks, statLinks, broken, } = require('../api.js');
// const { mdLinks } = require('../md_link.js');
// //const mdFind = require('../api.js');
// const fetch = require('node-fetch')

// jest.mock('fs');
// jest.mock('path');
// jest.mock('node-fetch');

const validRoute = './files/data/readme1.md';
const noValidRoute = './files/first.md';
const absoluteRoute = '/Users/lorenaguillendemichelli/Desktop/LABORATORIA/DEV001-md-links/files/data/readme1.md';
const dirRoute = '/Users/lorenaguillendemichelli/Desktop/LABORATORIA/DEV001-md-links/files/data';
const anArray = ['bigfile.txt', 'first.txt', 'links.md', 'readme1.md', 'second.txt', 'test.md', 'third.txt'];
const noMdPath = './files/data/first.txt'
const objectArray =
    [{
        href: 'https://nodejs.org/',
    }];
const resultStats = [
    "https://www.instagram.com/comesanomcbo/",
    "https://www.instagram.com/ironparadisefitness2022/",
    "https://www.instagram.com/laboratoriala/",
    "https://www.instagram.com/cristiano/"
]
const brokenLinks = [
    "https://www.instagram.com/c/as/",
    "https://www.instagram.com/c/as",
]

//1. Ruta válida
describe('valid', () => {
    it('should be a function', () => {
        expect(typeof valid).toBe('function');
    });
    it('should return true if the path exists', () => {
        expect(valid(validRoute)).toBe(true);
    });
    it('should return false if the path not exists', () => {
        expect(valid(noValidRoute)).toBe(false)
    });
});

//2. Ruta absoluta
describe('absolute', () => {
    it('should be a function', () => {
        expect(typeof absolute).toBe('function');
    });
    it('should be an absolute route', () => {
        expect(absolute(absoluteRoute)).toStrictEqual(true);
    });
    it('should return false if the route is not absolute', () => {
        expect(absolute('./files/data/links.md')).toBe(false);
    });
})

//3. Convierte relativa en absoluta
describe('resol', () => {
    it('should be a function', () => {
        expect(typeof resol).toBe('function')
    })
    it('should return an absolute route', () => {
        expect(resol(validRoute)).toBe(absoluteRoute);
    });
});

//4. Confirmar directorio
describe('directory', () => {
    it('should be a function', () => {
        expect(typeof directory).toBe('function')
    })
    it('should return true if the route is a directory', () => {
        expect(directory(dirRoute)).toBe(true);
    });
    it('should return false if the route is not a directory', () => {
        expect(directory(validRoute)).toBe(false);
    });
});

//5. Lee directorios
describe('read', () => {
    it('should be a function', () => {
        expect(typeof read).toBe('function')
    })
    it('should return files in a directory', () => {
        expect(read(dirRoute)).toEqual(anArray);
    });
});

//6. Lee archivos
describe('readFiles', () => {
    it('should be a function', () => {
        expect(typeof readFiles).toBe('function')
    })
    it('should return a promisse', () => {
        expect(readFiles('./files/data/links.md')).toBeInstanceOf(Promise)
    });
    it('should return promise reject if no path exists', () => {
        expect(readFiles('./files/data/linklink.md')).rejects.toEqual('Sorry, an error occurred')
    });
    it('should return a resolved promise if the path exists', () => {
        expect(readFiles(absoluteRoute)).resolves.toEqual('Este es un archivo .md')
    });
});

//7. Filtra extensiones .md
describe('filt', () => {
    it('should be a function', () => {
        expect(typeof filt).toBe('function')
    });
    it('should return the extention of .md path', () => {
        expect(filt(validRoute)).toBe('.md');
    });
    it('should return false if the path is different to .md file', () => {
        expect(filt(noMdPath)).toBe('.txt');
    });
});

//8. Links de archivos .md
describe('getTotalLinks', () => {
    it('should be a function', () => {
        expect(typeof getTotalLinks).toBe('function')
    });
    it('should return a promisse', () => {
        expect(getTotalLinks('./files/data/links.md')).toBeInstanceOf(Promise)
    });
    // it('should return an object array with links', () => {
    //     expect(getTotalLinks(dirRoute)).toEqual(objectArray)
    // });
});

//9. Validar con peticiones http
describe('validLinks', () => {
    it('should be a function', () => {
        expect(typeof validLinks).toBe('function')
    });
    it('should return a promisse', () => {
        expect(validLinks(objectArray)).toBeInstanceOf(Promise)
    });
    it('should return an array with status', () => {
        return validLinks(objectArray).then(result => expect([{ "href": "https://nodejs.org/", "ok": "ok", "status": 200 }]).toEqual(result))
    });
});

//10. Funcion stats sola
describe('statLinks', () => {
    it('should be a function', () => {
        expect(typeof statLinks).toBe('function')
    });
    it('should show the total of links', () => {
        expect(total(resultStats));
    });
    it('should send only stats', () => {
        expect(statLinks(resultStats)[0].unique).toBe('readme.md');
    });
});

//11. Funcion broken
describe('broken', () => {
    it('muestra la cantidad de links rotos', () => {
        expect(broken(brokenLinks))
    })
});
