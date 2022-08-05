//metodos mas utilizados con cadenas de caracteres
// como obtener el largo de una cadena
let str = "Hola soy un string";
console.log(str.length);// 18

//Obtener partes de una cadena de caracteres
// slice(), substring(), substr()

let str_slice = "Hola soy un string";
console.log(str_slice.slice(5, 10));// "soy u"

let str_substring = "Hola soy un string";
console.log(str_substring.substring(5, 10));// "soy u"

let str_substr = "Hola soy un string";
console.log(str_substr.substr(5, 10));// "soy un str"

//Reemplazar partes de una cadena de caracteres
// al utilizar strings solo reemplaza la primera instancia
let str_replace = "Hola soy un string";
console.log(str_replace);// "Hola soy un string"
console.log(str_replace.replace("Hola", "Adios"));// "Adios soy un string"


// al utilizar strings solo reemplaza la primera instancia
let texto_largo = "los mejores cursos de programacion son los de Platzi, pero los de Platzi son los mejores, los de Platzi son los mejores, los de Platzi son los mejores";

console.log(texto_largo.replace("Platzi", "Udemy"));
    
//la utilizar la exprecion regular /g (global) para reemplazar todas las instancias

console.log(texto_largo.replace(/Platzi/g, "Udemy"));// "los mejores cursos de programacion son los de Udemy, pero los de Udemy son los mejores, los de Udemy son los mejores, los de Udemy son los mejores"

