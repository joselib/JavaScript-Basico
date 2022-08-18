//Que son las funciones, como se declaran y como se utilizan
saludar("Juan");

function saludar(nombre) {
    //codigo
    console.log(`Hola ${nombre}`);
}

//Otra forma de pasar parametros a una funcion

const nom = "jose";

saludar2(nom);

function saludar2(nombre) {
    console.log(`Hola ${nombre}`);
}

//////

// variable global
let nombre_2 = "Juan";

despedir(nombre_2);

function despedir(nombre) {
    // variable local a la funcion
    nombre = "diego";
    console.log(`Adios ${nombre}`);
}

//funcion con objetos

const persona = { nombre: "maria", apellido: "perez" };

console.log(persona);

//cambia el valor de la variable global dentro de la funcion
saludarPersona(persona);

console.log(persona);

function saludarPersona(objeto) {
    //capturar el objeto y modificarlo dentro de la funcion 
    objeto.nombre = "juan";
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`);
}

saludar();


////

function imprimeNumero(numero = 7) {//si no se pasa un valor se le asigna un valor por defecto
    console.log(numero);
}

imprimeNumero();


//////
//imprime todos los parametros que se le pasen a la funcion

function imprimeTodos(...parametros) {
    console.log(parametros);
}

imprimeTodos(1, "hola", true, false, null, undefined, [1, 2, 3], { nombre: "juan" });

//////
//funcion con parametros opcionales y retornar un valor
function suma(...suma) {
    return suma.reduce((a, b) => a + b);
}


const s = suma(1, 2, 3, 5);
console.log(s);


// funcion multiplicar

function multiplicar(...multiplicar) {
    return multiplicar.reduce((a, b) => a * b);
}
console.log(multiplicar(1, 2, 3));
