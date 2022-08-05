//metodos de cadenas de texto (parte 3)
//https://www.regexr.com

let texto_largo = "los mejores cursos de programacion son los de Platzi, pero los de Platzi son los mejores, los de Platzi son los mejores, los de Platzi son los mejores.";

console.log(texto_largo.match(/Platzi/g));//devuelve un array con todas las coincidencias

//busca si hay una palabra dentro de una cadena de texto y devuelve true o false
console.log(texto_largo.includes("Platzi"));//devuelve true

// saber si un texto empieza con una palabra
console.log(texto_largo.startsWith("los"));//devuelve true

// saber si un texto termina con una palabra
console.log(texto_largo.endsWith("mejores."));//devuelve true