//Una variable que contenga tu altura en centímetros (entero)
var altura = 180;
console.log(altura);

//Una variable que contenga tu altura en metros (número de coma flotante)
let altura2 = 1.80;
console.log(parseFloat(altura2));

// Una variable que contenga tu peso en kilogramos (número de coma flotante)
var peso = 74.5;

//Una variable que contenga tu altura en metros redondeada hacia arriba (entero)
let altura3 = Math.ceil(altura2);
console.log(altura3);

//Una variable que contenga tu peso en kilogramos redondeado hacia abajo (entero)
let peso2 = Math.floor(peso);
console.log(peso2);

//Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let max = Number.MAX_VALUE;
let max2 = max + 1;
console.log(max2);
