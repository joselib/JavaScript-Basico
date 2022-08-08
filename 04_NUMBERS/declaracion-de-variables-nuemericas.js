//sesion 05 numbers

//Declaracion de variables y asignacion de valores enteros y decimales
let num1 = 10;

console.log(num1);  // 10

let num2 = 20.5;

console.log(num2); //20.5

//Precisio 

let num3 = 0.1;
let num4 = 0.2;

console.log(num3 + num4); //0.30000000000000004

//Operadores aritmeticos para aproximar el resultado truco de precisión
console.log(Math.round((num3 + num4 )* 100)/100); //0.3