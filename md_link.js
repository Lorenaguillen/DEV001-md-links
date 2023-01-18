const path = require('path');
const { directory, read, filt, getTotalLinks, validLinks, statLinks, broken, } = require('./api.js');

// esta función nos devolverá la ruta
const pathFinal = (myRoute) => {
    //const routeAbsolute = absolute(myRoute) ? myRoute : resol(myRoute);
    if (directory(myRoute)) {  //en caso de ser directorio se busca un archivo dentro
        const arreglodirectorio = read(paths); //lee el contenido de un directorio
        arregloresult = arreglodirectorio.filter(e => filt(e) === '.md')
        arregloresult.forEach(File => {
            const resolverabsoluta = path.resolve(paths)
            const rutafile = path.join(`${resolverabsoluta}/${File}`
            )
        })
        return arregloresult
    }
    return [myRoute]

}

const mdLinks = (paths, option) => {
    return new Promise((resolve, reject) => {  //retorna una promesa que se consume en cli

        if (option.stats === true && option.validate === true) {
            const ruta = pathFinal(paths)
            ruta.forEach(e => {
                getTotalLinks(e)
                    .then((link) => {
                        validLinks(link)
                            .then(res => resolve(broken(res)))
                    })

            })
            return
        }
        if (option.validate === false) {
            const ruta = pathFinal(paths)
            ruta.forEach(e => {
                resolve(getTotalLinks(e))

            })
        }
        if (option.validate === true) {
            const ruta = pathFinal(paths)
            ruta.forEach(e => {
                getTotalLinks(e)
                    .then((link) => {
                        resolve(validLinks(link))
                    })

            })
            return
        }
        if (option.stats === true) {
            const ruta = pathFinal(paths)
            ruta.forEach(e => {
                getTotalLinks(e)
                    .then((links) => { //areglos de objetos con link y esto lo necesita estadistica
                        resolve(statLinks(links))  //lo recibe 
                    })
            })
            return
        }
    })
}
module.exports = {
    mdLinks
};