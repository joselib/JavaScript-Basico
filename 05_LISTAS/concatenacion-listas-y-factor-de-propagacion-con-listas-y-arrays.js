//como unir dos listas con .concat()

let lista1 = ["hola", "mundo", "!"];
let lista2 = ["que", "tal", "?"];

console.log(lista1.concat(lista2));

let lista3 = lista1.concat(lista2);
console.log(lista3);

// como unir dos listas con el factor de propagacion 
console.log(...lista3);//... es un factor de propagacion que cada elemento de la lista por separado no como un array
let lista4 = [...lista1, ...lista2];// une las dos listas con el factor de propagacion y las muestra como un array
console.log(lista4);


//ERROR !! mal entendido el concepto de  factor de propagacion

const lista5 = [lista1, lista2];
console.log(lista5);

