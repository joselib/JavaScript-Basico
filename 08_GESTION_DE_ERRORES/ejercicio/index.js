const logger = require('./logger');


//En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
const miFuncion = val => {
    if (typeof val === 'number') {
        return 2 * val;
    }
    throw new Error('El valor no es un numero');
}
console.log(miFuncion("Hola"));

const numero = "8";

try {
    //Codi que podria fallar
    console.log('Se ejecuto el codigo correctamente');
    const doble = miFuncion(numero);
    console.log(doble);
} catch (e) {
    //Codigo que se ejecuta si ocurre un error
    logger.error(`El error es: ${e}`);
    logger.error("error!!");
} finally {
    //Codigo que se ejecuta siempre
    console.log('Se ejecuto el codigo');
}

logger.info('esto es una info');
logger.warn('esto es una advertencia');
logger.error('esto es un error');
logger.debug('esto es un debug');