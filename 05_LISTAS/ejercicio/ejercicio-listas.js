//Una variable que contenga la lista de la compra (mínimo 5 elementos)
let shoppingList = ["pan", "leche", "azucar", "aceite", "harina"];


//Modifica la lista de la compra y añádele "Aceite de Girasol"
shoppingList.push("Aceite de Girasol");
console.log(shoppingList);//Muestra la lista de la compra

//Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
shoppingList.splice(shoppingList.indexOf("Aceite de Girasol"), 1);
console.log(shoppingList);//["pan", "leche", "azucar", "harina"]

//Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const movies = [{ title: "The Shawshank Redemption", director: "Frank Darabont", date: "14-10-2001" },
{ title: "The Godfather", director: "Francis Ford Coppola", date: "24-04-2012" },
{ title: "The Godfather: Part II", director: "Francis Ford Coppola", date: "03-24-2015" }];

//Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

const nuevaLista = movies.filter(movies => movies.date > "01-01-2010");
console.log(nuevaLista);

//Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const nuevaLista2 = movies.map(movies => movies.director);
console.log(nuevaLista2);

//Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const nuevaLista3 = movies.map(movies => movies.title);
console.log(nuevaLista3);

//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const nuevaLista4 = nuevaLista2.concat(nuevaLista3);
console.log(nuevaLista4);

//una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const nuevaLista5 = [...nuevaLista2, ...nuevaLista3];
console.log(nuevaLista5);
