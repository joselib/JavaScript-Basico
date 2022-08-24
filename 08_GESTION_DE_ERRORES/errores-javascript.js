const miFuncion = val => {
    if (typeof val === 'number') {
        return 2 * val;
    }
    throw new Error('El valor no es un numero');
}

//console.log(miFuncion("Hola"));

const numero = "8";

try {
    //Codi que podria fallar
    console.log('Se ejecuto el codigo correctamente');
    const doble = miFuncion(numero);
    console.log(doble);
} catch (e) {
    //Codigo que se ejecuta si ocurre un error
    console.error(`El error es: ${e}`);
    console.error("error!!");
} finally {
    //Codigo que se ejecuta siempre
    console.log('Se ejecuto el codigo');
}

//InternalError: error que se produce en el servidor y no se puede controlar por el usuario 
//SyntaxError: error de sintaxis en el codigo
//ReferenceError: error de referencia a una variable o funcion que no existe
//TypeError: error de tipo (no se puede convertir un string a un numero)
//RangeError: error de rango (numero fuera de rango)
//EvalError: error de evaluacion (error de sintaxis en una funcion eval)
//URIError: error de URI (error de URI en una funcion encodeURI)
