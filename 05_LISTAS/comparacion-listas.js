//Como podemos comparar listas
//.every()

const lista = [3, 5, 2, -1, 7, 9];

const resultado = lista.every(valor => {
    if (valor > 0) {
        return true;
    } else {
        return false;
    }
})

console.log(resultado); //false porque algun numero es menor que 0

//mas obtimizado el codigo
const resultado2 = lista.every(valor => valor > 0);
console.log(resultado2); //retorna false porque algun numero es menor que 0 de la lista

//comparar listas 

const lista2 = [3, 5, 2, -1, 7, 9];
const lista3 = [3, 5, 2, -1, 7, 9];


const compararListas = (lista1, lista2) => {
    if (lista1.length !== lista2.length) return false;
    const res = lista1.every((valor, i) => valor === lista2[i]);
    return res;
}
console.log(compararListas(lista2, lista3)); //retorna true porque las listas son iguales

const lista4 = [3, 5, 2, -1, 9];

console.log(compararListas(lista2, lista4)); //retorna false porque las listas no son iguales

