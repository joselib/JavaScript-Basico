var variable;
let variebleLet;

//const constante;

const constante = "Hola soy una constante";
console.log(constante);
// constante = "adiós"; // nos da un error

var a = 10;
console.log(a);

a = 20;
console.log(a);

let b = 30;
console.log(b);

b = 40;
console.log(b);


var variableVar = "Hola soy una variable VAR";

for (let i = 0; i < 10; i++) {
    let variableLet = "Hola soy una variable LET";
    console.log(variableLet);
}
//console.log(variableLet); // nos da un error porque la variableLet solo existe dentro del ciclo for
console.log(variableVar);

///////////////////////////////

//tipos de datos

console.log(typeof variableVar);//string
console.log(typeof 5)//number
console.log(typeof true)//boolean 
console.log(typeof null)//object
console.log(typeof undefined)//undefined  
console.log(typeof function(){})//function