//Sets o cunjuntos (en castellano)

const lista = [1, 2, 3, 4, "hola", "adios", "mundo", "hola"];

const miSet = new Set(lista);

//la diferencia entre un set y un array es que un set no permite valores duplicados
console.log(lista);
console.log(miSet);

//eliminar un valor del set con delete()

miSet.delete("hola");
console.log(miSet);

//eliminar todos los valores del set con clear()
// miSet.clear();
// console.log(miSet);

//.has()
console.log(miSet.has("hola"));//false porque no esta en el set
console.log(miSet.has(1));//true porque esta en el set

//.size()
console.log(miSet.size);//12 porque tiene 12 valores unicos no repetidos

//iterar sobre un set con forEach()
miSet.forEach(function (valor) {
    console.log(valor);
});

//convertir en un objeto iterable con values()
const it_miSet = miSet.values();
console.log(it_miSet);//devuelve un iterador

//convertir en un array con el factor de propagacion

const ar_miSet = [...miSet];
console.log(ar_miSet);//devuelve un array