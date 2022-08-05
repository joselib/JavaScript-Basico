// metodos de cadenas de texto  (parte 2)

//metodo para convertir una cadena de texto a mayusculas

let input = "pisIS";
let bd = "pisis";

//metodo toUpperCase()

console.log(input.toUpperCase());//PISIS

//metodo toLowerCase()

console.log(input.toLowerCase());//pisis

// comparacion de cadenas de texto convertidas a mayusculas
console.log(input.toLowerCase === bd.toLowerCase);//true

//concatenar cadenas de texto

let str_1 = "priemra cadena de texto.";
let str_2 = "segunda cadena de texto.";

//metodo concat()
console.log(str_1.concat(" ", str_2));//priemra cadena de texto segunda cadena de texto

// metodo de concatenacion de cadenas de texto con el operador +

console.log(str_1 + " " + str_2);//priemra cadena de texto segunda cadena de texto

//medotodo de concatenacion de cadenas de texto con las comillas invertidas

console.log(`${str_1} ${str_2}`);//priemra cadena de texto segunda cadena de texto

//eliniminar espacios en blanco en una cadena de texto

let str_3 = "   hola soy un string con esfacios al final.   ";
console.log(str_3.length);//44

//metodo trim()

console.log(str_3.trim().length);//41
console.log(str_3.trimStart().length);//44
console.log(str_3.trimEnd().length);//44

// obtener el caracter en una posicion especifica de una cadena de texto

let str_4 = "hola soy un string numero 4";//["h", "o", "l", "a", " ", "s", "o", "y", " ", "u", "n", " ", "s", "t", "r", "i", "n", "g", " ", "n", "u", "m", "e", "r", "o", " ", "4"]

console.log(str_4.charAt(3));//a
console.log(str_4[3]);//a

// Obtener la posicion de un caracter en una cadena de texto

let str_5 = "hola soy un string numero 5. hola soy un string numero 5.";

console.log(str_5.indexOf("string"));//12 (devuelve la primera posicion del caracter)

console.log(str_5.lastIndexOf("string"));//41 (devuelve la ultima posicion del caracter)



