//cadenas de caracteres
//string

let str_double = "Hola soy una cadena de caracteres con comillas dobles"; 
let str_sngle = ' Hola soy una cadena de caracteres con comillas simples';

console.log(str_double);//Hola soy una cadena de caracteres con comillas dobles
console.log(str_sngle);//Hola soy una cadena de caracteres con comillas simples

let str_comillas_simples = 've a sacar la "basura"';
let str_comillas_dobles = "ve a sacar la 'basura'";

let str_comillas_dobles_2 = "ve a sacar la \"basura\"";
let str_comillas_dobles_3 = 've a sacar la \'basura\'';

//comillas invertidas (backticks)

let str_comillas_invertidas = `ve a sacar la "basura"`;
let str_comillas_invertidas_2 = `ve a sacar la 'basura'`;

console.log(str_comillas_invertidas);//ve a sacar la "basura"
console.log(str_comillas_invertidas_2);//ve a sacar la 'basura'


// introduccion de variables en cadenas de caracteres

let nombre = "Juan";
let saludo = `Hola ${nombre}`;

console.log(saludo);//Hola Juan

//pantilla html con las comillas invertidas

let pantilla = `<h1>Hola ${nombre}</h1>`;
console.log(pantilla);//<h1>Hola Juan</h1>

//introduccion de variables en html

let libro = ["El señor de los anillos", "El señor de los anillos", "El señor de los anillos"];