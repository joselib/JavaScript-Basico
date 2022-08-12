//trabajndo con objetos

const obj = {
    id: 1,
    name: 'Juan',
    apellidos: 'Perez',
    age: 30,
    isDeveloper: true,
    languages: ['JavaScript', 'PHP', 'Python'],
    "4-juegos": ['Mario', 'Zelda', 'Donkey Kong', 'Metroid']
};

console.log(obj.id);
console.log(obj["4-juegos"]);


//acceder a propiedades atravez de variables 
const prop = 'isDeveloper';
console.log(obj[prop]);// acceder a una propiedad atravez de una variable
const obj2 = obj;
console.log(obj2)

obj2.name = 'Pedro';
console.log(obj2.name);// cambiar el valor de una propiedad
console.log(obj.name);//cambio el valor de la propiedad


let val1 = 4;
let val2 = val1;

val2 = 5;
console.log(val1);//4
console.log(val2);//5 cambia el valor de la variable

//copiar un objeto
const obj3 = { ...obj };
console.log(obj3.name);//Pedro
console.log(obj.name);//Pedro

obj3.name = 'Maria';
console.log(obj.name);//Pedro
console.log(obj3.name);//Maria


// como ordenar listas de objetos en funcion de una propiedad

const listaPeliculas = [
    { titulo: 'Batman', year: 2019 },
    { titulo: 'Spiderman', year: 2018 },
    { titulo: 'Superman', year: 2017 },
    { titulo: 'Ironman', year: 2010 },
    { titulo: 'Capitan America', year: 2011 }];

//ordenar lista de peliculas por año
listaPeliculas.sort((a, b) => a.year - b.year);
console.log(listaPeliculas);

//ordenar por el titulo de las peliculas
listaPeliculas.sort((a, b) => a.titulo.localeCompare(b.titulo));
console.log(listaPeliculas);

