//Trabajndo con fechas
const fecha = new Date();
console.log(fecha);

//Atencion los meses inician en 0
const fecha2 = new Date(2020, 0, 1, 5, 30, 192);
console.log(fecha2);

//fecha con milisegundos 
const fecha3 = new Date(-1000000000000);
console.log(fecha3);

//Definir las fechas con un string
const fecha4 = new Date('October 13, 2014 11:13:00');
console.log(fecha4);

//Comparar fechas 
console.log(fecha3 > fecha4);

const fecha5 = new Date('October 13, 2014 11:13:00');
console.log(fecha5);

//comparar fechas con el metodo getTime()
//el metodo getTime() devuelve el numero de milisegundos desde el 1 de enero de 1970  
console.log(fecha5.getTime() === fecha4.getTime());

//obtener el dia , el mes y el año de una fecha
//el metodo getDay() devuelve el dia de la semana de la fecha
console.log(fecha2.getDay());
console.log(fecha2.getMonth() + 1);
console.log(fecha2.getFullYear());

//.toLocaleDateString() devuelve un string con la fecha en formato local

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString

console.log(fecha2.toLocaleDateString("en-US"));