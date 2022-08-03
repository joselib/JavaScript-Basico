//listas, arreglos , arrays 


const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(lista);
const lista2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(lista2);
const lista3 = new Array(3);
console.log(lista3);
lista3[0] = "soy el primer elemento";
console.log(lista3);

const lista4 = [lista, lista2, lista3];
console.log(lista4);



//objetos con atributos 

const movil = {
    marca: "samsung",
    modelo: "s10",
    color: "blue",
    precio: "$1.000.000",
    isNew: true,
    contactos: ["juan", "pedro", "jose"], //array dentro de un objeto
    pantalla: {//objeto dentro de un objeto
        pulgadas: 5,
        resolucion: "1080x1920",
        peso: "200g"
    }, 
"sistema operativo": "android" //propiedad con espacios
};
//cambiar el valor de un atributo
movil.isNew = false;
movil.precio = "$1.500.000";
console.log(movil.color);
console.log(movil.isNew);
console.log(movil.precio);
console.log(movil["sistema operativo"]);


//fechas

//libreria de apoyo para trabajar con fechas Moment.js

const ahora = new Date();//fecha actual
console.log(ahora);

const fecha_milis = new Date(10);// utilizar milisegundos
console.log(fecha_milis);

const fecha_cadena = new Date("march 1 1994");//utilizar cadena de texto
console.log(fecha_cadena);

const fecha_valores = new Date(1994, 2, 1);//utilizar valores
console.log(fecha_valores);

const dia = ahora.getDate();//obtener el dia
const mes = ahora.getMonth() + 1;//obtener el mes 
const anio = ahora.getFullYear();//obtener el año

console.log(dia, mes, anio);