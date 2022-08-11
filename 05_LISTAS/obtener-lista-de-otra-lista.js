//como otener una lista apartir de otra lista .slice()

let lista = ["hola", "adios", "buenas", "tardes", "buenos dias"];

//no modifica la lista original
console.log(lista.slice(2, 4));

let lista2 = lista.slice(2, 4);
console.log(lista2); //["buenas", "tardes"]

const lista3 = lista.slice(1, -2);
console.log(lista3); //["buenas", "tardes"]