//prueba sobre un modelo aleatorio que me de validez o no a mi ruta
//es solo prueba ya que no trabajaremos con metodo aleatorio
//practicando promesas

const estatusRuta = () => {
    return Math.random() < 0.8;
};

const miRuta = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (estatusRuta()) {
            resolve('La ruta es válida');
        } else {
            reject('La ruta no es válida. FIN')
        }
    }, 2000);
});

const confirmarRuta = (confirmar) => {
    console.log(confirmar);
}

const errorRuta = (error) => {
    console.log(error);
}

miRuta.then(confirmarRuta).catch(errorRuta);

// const confirmarRuta = (mensajeConfirmar) => {
//     console.log(mensajeConfirmar)
// }

// const rechazarRuta = (mensajeError) => {
//     console.log(mensajeError)
// }

// miRuta.then(confirmarRuta, rechazarRuta);