
// debo agregar al inicion 'export' si es que quiero exportar con ECMA, en otro caso quito 'export' y trabajo con module.exports
export function sumar(x, y) {
    return x + y
}

function restar(x, y) {
    return x - y
}

function multipli(x, y) {
    return x * y
}

function dividir(x, y) {
    return x / y
}

//esta forma la utilizaré si es que exporto con require, no funciona con ECMA
// module.exports = {
//     sumar,
//     restar,
//     multipli,
//     dividir
// }