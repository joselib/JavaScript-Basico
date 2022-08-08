//Una cadena de texto con tu Nombre
let nombre = "Jose";
console.log(nombre);//Imprime el valor de la variable nombre

//Otra cadena de texto con tu Apellido

let apellido = "Rincon";
console.log(apellido);//Imprime el valor de la variable apellido

// Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = nombre + " " + apellido;
console.log(estudiante);//Imprime el valor de la variable estudiante

//Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);//Imprime el valor de la variable estudianteMayus EN MAYUSCULAS

//Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);//Imprime el valor de la variable estudianteMinus EN MINUSCULAS

//Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let numeroLetras = estudiante.length;
console.log(numeroLetras);//Imprime el valor de la variable numeroLetras

//Una variable que contenga la primera letra del Nombre
let primeraLetra = nombre.charAt(0);
console.log(primeraLetra);//Imprime el valor de la variable primeraLetra EN MAYUSCULAS

//Otra variable que contenga la última letra del Apellido
let ultimaLetra = apellido.charAt(apellido.length - 1);
console.log(ultimaLetra);//Imprime el valor de la variable ultimaLetra EN MAYUSCULAS

//Una cadena de texto que elimine los espacios de la variable "estudiante"
let sinEspacios = estudiante.replace(/\s/g, "");
console.log(sinEspacios);//Imprime el valor de la variable sinEspacios

//- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let nombreEnEstudiante = estudiante.includes(nombre);
console.log(nombreEnEstudiante);//Imprime el valor de la variable resultado en  TRUE o FALSE
