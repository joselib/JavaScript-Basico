//.some() -> returns true if any of the elements in the lista match the condition

const lista = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const res = lista.some(element => element < -3);
console.log(res);//false -> no hay ningun elemento que sea menor a -3

const existe = lista.some(element => element === -1);
console.log(existe);//true -> hay al menos un elemento que sea menor a -1

const listaObjetos = [{ id: 1, nombre: 'Juan' }, { id: 2, nombre: 'Pedro' }, { id: 3, nombre: 'Maria' }];

const existeObjeto = listaObjetos.some(element => element.id === 2);
console.log(existeObjeto);//true -> hay al menos un elemento que tenga el id 2

//como obtener un lista a partir de un objeto iterable

const str = 'Hola mundo';
console.log(str[5])//m -> el caracter que esta en la posicion 5

const ar_str = Array.from(str);
console.log(ar_str);//['H', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']

const set = new Set([2, 3, "Hola", "mundo"]);
const ar_set = Array.from(set);
console.log(ar_set);//[2, 3, "Hola", "mundo"]

//keys() -> devuelve un iterador con las claves del objeto

const keys = lista.keys();
console.log(keys);//Object -> iterador con las claves del objeto

const ar_keys = Array.from(keys);
console.log(ar_keys);//[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]