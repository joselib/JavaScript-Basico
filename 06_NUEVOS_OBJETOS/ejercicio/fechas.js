//La fecha de hoy
let fecha = new Date();

//La fecha de tu nacimiento
let fechaNacimiento = new Date(1994, 02, 01);
console.log(fechaNacimiento);

//Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

let hoyEsMasTarde = fecha > fechaNacimiento;
console.log(hoyEsMasTarde);//true

//Una variable que contenga el día de tu nacimiento
let diaNacimiento = fechaNacimiento.getDate();
console.log(diaNacimiento);//1

//Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
let mesNacimiento = fechaNacimiento.getMonth() + 1;
console.log(mesNacimiento);//3

//Una variable que contenga el año de tu nacimiento (con 4 dígitos)
let anioNacimiento = fechaNacimiento.getFullYear();
console.log(anioNacimiento);//1994

