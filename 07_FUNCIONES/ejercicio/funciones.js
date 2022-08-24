//Una función sin parámetros que devuelva siempre "true"
function trueFunction() {
    return true;
}
console.log(trueFunction());

//Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
function asyncFunction() {
    setTimeout(function () {
        console.log("Hola soy una promesa");
    }, 5000);
}
asyncFunction();

//Una función generadora de índices pares automáticos
function* evenIndexGenerator() {
    let index = 0;
    while (true) {
        yield index;
        index += 2;
    }
}

const indexGenerator = evenIndexGenerator();
console.log(indexGenerator.next().value);
console.log(indexGenerator.next().value);
console.log(indexGenerator.next().value);
console.log(indexGenerator.next().value);
