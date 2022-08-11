//como iterar los valores de un array o lista
const lista = ["hola", "mundo", "como", "estas", "?", undefined, null, ""];

//forma antigua de iterar un array y poco eficiente
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);//imprime los valores de la lista
}

//forma ES6 nueva de iterar un array y eficiente

lista.forEach(valor => {
    console.log(valor);
})

let suma = 0;
const listNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
listNum.forEach(valor => {
    suma += valor;
    console.log(valor);
})
console.log(suma);//suma los valores de la lista y los imprime en consola 

//busqueda de un valor en un array con .find()

const variable = lista.find(valor => {
    if (valor === "mundo") {
        return true;
    }
})

console.log(variable);//imprime el valor de la busqueda

listaObjetos = [
    {
        nombre: "jose",
        apellido: "perez",
        edad: 20,
    },
    {
        nombre: "juan",
        apellido: "perez",
        edad: 10,
    },
    {
        nombre: "pedro",
        apellido: "perez",
        edad: 30,
    },
]

//busqueda de un objeto en un array con .find() sin obtimizar el codigo
const objeto = listaObjetos.find(valor => {
    if (valor.nombre === "jose") {
        return true;
    }
})
console.log(objeto.edad);//imprime la edad del objeto buscado

//busqueda de un objeto en un array con .find() optimizando el codigo

const objeto2 = listaObjetos.find(valor => valor.nombre === "jose");
console.log(objeto2.edad);// imprime el objeto buscado

//busqueda mas eficiente de un objeto en un array con .find() sin pasar por un objeto

const { edad } = listaObjetos.find(valor => valor.nombre === "jose");
console.log(edad);//imprime la edad del objeto buscado