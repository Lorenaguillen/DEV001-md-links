// esta es una url de ejemplo
const miURL = new URL('https://www.lorena.com/laboratoria/repositorios?ordenar=proyectos&tema=js');

//extraer las distintas partes de la url y usar los aspectos basicos de la url de node

console.log(miURL.hostname); // nos dara el nombre del host: www.lorena.com
console.log(miURL.pathname); // nos da el camino: /laboratoria/repositorios

console.log(miURL.searchParams); // nos da los parametros de busqueda al final de la url: URLSearchParams { 'ordenar' => 'proyectos', 'tema' => 'js' }
console.log(typeof miURL.searchParams); //nos indica que los parametros son un objeto: object

console.log(miURL.searchParams.get('ordenar')); //nos da el valor de ordenar: proyectos
console.log(miURL.searchParams.get('tema')); //nos da el valor de ordenar: js