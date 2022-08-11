// trabajar con metodos mas avanzados
//.map() .filter() .reduce()

const lista = ["bogota", "calima", "medellin", "bucaramanga", "cali", "cartagena", "barranquilla", "cucuta", "pereira", "bucaramanga", "cali", "cartagena", "barranquilla", "cucuta", "pereira", "bucaramanga", "cali", "cartagena", "barranquilla", "cucuta", "pereira", "bucaramanga", "cali", "cartagena", "barranquilla", "cucuta", "pereira", "bucaramanga", "cali", "cartagena", "barranquilla", "cucuta", "pereira", "bucaramanga", "cali", "cartagena", "barranquilla", "cucuta", "pereira", "bucaramanga", "cali", "cartagena", "barranquilla", "cucuta", "pereira", "bucaramanga", "cali", "cartagena", "barranquilla", "cucuta", "pereira", "bucaramanga", "cali", "cartagena", "barranquilla", "cucuta", "pereira", "bucaramanga", "cali", "cartagena", "barranquilla", "cucuta", "pereira", "bucaramanga", "cali", "cartagena", "barranquilla", "cucuta", "pereira", "bucaramanga", "cali", "cartagena", "barranquilla", "cucuta", "pereira", "bucaramanga", "cali", "cartagena", "barranquilla", "cucuta", "pereira", "bucaramanga", "cali", "cartagena", "barranquilla", "cucuta", "pereira", "bucaramanga", "cali", "cartagena", "barranquilla", "cucuta", "pereira", "bucaramanga", "cali", "cartagena", "barranquilla", "cucuta"];

const val = lista.forEach(v => {
    console.log(v);
    return 4;
})
console.log(val); //undefined

//una de las formas de hacerlo
// const newlist = lista.map((valor, indice) => {
//     return `${indice + 1} - ${valor}`; 
// })
//console.log(newlist);

const newlist = lista.map((valor, indice) => `${indice + 1} - ${valor}`);
console.log(newlist);


const listaObjetos = [
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
//busqueda de un objeto en un array con .filter() sin obtimizar el codigo
// const personasMayores = listaObjetos.filter(obj => {
//     if (obj.edad > 20) {
//         return true;
//     }else{
//         return false;
//     }
// })
// console.log(personasMayores);

//busqueda de un objeto en un array con .filter() optimizando el codigo

const personasMayores = listaObjetos.filter(obj => obj.edad > 20);
console.log(personasMayores);

// busqueda quitando un objeto en un array con .filter() optimizando el codigo
const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "jose");
console.log(nuevaLista);

//reduce()
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const suma = numeros.reduce((acumulador, cur, i, arryOriginal) => {
    console.log(acumulador)
    console.log(cur)
    console.log(i)
    console.log(arryOriginal)
    return acumulador + cur;
})