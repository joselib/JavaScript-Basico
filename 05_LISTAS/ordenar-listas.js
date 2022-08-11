//.sort()->modifica el array  (es ordena un array)
const lista = [2, 3, 5, 1, 4];
console.log(lista);

lista.sort((a, b) => {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return +1;
    } else {
        return 0;
    }
})

console.log(lista);

//Ordenar unicamente listas numericas 
const listaNumerica = [2, 3, 5, 1, 4];
console.log(listaNumerica);

listaNumerica.sort((a, b) => a - b);
console.log(listaNumerica);

//Ordenar listas de objetos
const listaObjetos = [
    { nombre: 'Juan', edad: 20 },
    { nombre: 'Pedro', edad: 30 },
    { nombre: 'Maria', edad: 25 }
];

//una forma de ordenar un array de objetos
listaObjetos.sort((a, b) => {
    if (a.edad < b.edad) {
        return -1;
    } else if (a.edad > b.edad) {
        return +1;
    } else {
        return 0;
    }
})

console.log(listaObjetos);

//otra forma de ordenar un array de objetos obtimizando el codigo

listaObjetos.sort((a, b) => a.edad - b.edad);
console.log(listaObjetos);