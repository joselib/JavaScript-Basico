// como trabajar con listas (array, list, vector, arraylist, arraylist)
let var1 = 45;
let lista = ['hola', 1, { id: 5 }, true, 'adios', var1];

console.log(lista); // imprime todo el array

//como acceder a sus valores del array (lista) y imprimirlos
//array[indice] => 0, 1, 2, 3, 4, 5
console.log(lista[0]); // imprime hola
console.log(lista[1]); // imprime 1
console.log(lista[2]); // imprime { id: 5 }
console.log(lista[3]); // imprime true
console.log(lista[4]); // imprime adios
console.log(lista[5]); // imprime 45 

//metodos para introducir y eliminar valores del array
//push() => añade un valor al final del array
lista.push('nuevo valor');
console.log(lista); // imprime todo el array

//pop() => elimina el ultimo valor del array
lista.pop();
console.log(lista); // imprime todo el array

//shift() => elimina el primer valor del array
lista.shift();
console.log(lista); // imprime todo el array

//unshift() => añade un valor al principio del array
lista.unshift('nuevo valor');
console.log(lista); // imprime todo el array

//splice() => elimina y añade valores en una posicion determinada del array
//splice(posicion, numero de valores a eliminar, valor a añadir)
lista.splice(1, 0, 'segundo valor');
console.log(lista); // imprime todo el array

lista.splice(2, 5); // elimina el valor en la posicion 3 y 5 valores siguientes
console.log(lista); // imprime todo el array

//modificar valores del array con el metodo splice()
lista.splice(0, 1, 'hola');
console.log(lista); // imprime todo el array

