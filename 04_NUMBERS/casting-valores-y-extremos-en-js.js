// Operador .valueOf() - obtener valores numericos a patir de literales

let num = 2;

let num1 = new Number(3);

console.log(num);
console.log(num1);
console.log(num + num1); // 5

console.log(num.valueOf() + num1.valueOf());//5 // 2


// NaN - Not a Number

let n = Number('Hello');
console.log(n); // NaN

console.log(Number.isNaN(n)); // true

let numerador = 10;
let divisor = 0;

console.log(numerador / divisor); // Infinity

let divisor2 = null;
console.log(numerador / divisor2); // infinity


//como convertir un string a numero con Number() o parseInt() o parseFloat()

let numero = '10.80';
let numero2 = 10.90;

console.log(numero + numero2); // error de concepto 

console.log(Number(numero) + numero2); // 20.89

console.log(parseInt(numero)); // 10 - convierte a entero el numero sin decimales
console.log(parseFloat(numero)); // 10.89 - convierte a entero el numero con decimales

//numeros hexadecimales (base 16) 
//los numeros hexadecimales se escriben con el prefijo 0x o 0X 
//son utilizados para representar numeros de 16 bits que equivalen a un numero de 8 bits cada uno y forman dos bytes

let numeroHex = 0x3a5b7;
console.log(parseInt(numeroHex));//239031

//Obtener los valores minimos y maximos en javascript

let minPrecision = Number.EPSILON;
let minValor = Number.MIN_VALUE;
let maxValor = Number.MAX_VALUE;

console.log(minPrecision); // 2.220446049250313e-16
console.log(minValor); // 5e-324
console.log(maxValor); // 1.7976931348623157e+308



