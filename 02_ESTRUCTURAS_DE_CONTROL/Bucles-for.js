//Bucles for

//formas de incrementar una variable
//++
//+=
//--
//-=
//*=
///=
//%=
// i = i + 1
// i += 1
// i = i - 1
// i -= 1
// i = i * 1
// i *= 1
// i = i / 1
// i /= 1
// i = i % 1
// i %= 1

for (var i = 0; i < 10; i++) {
    console.log(i);
}

let lista = ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez"];

for (let i = 0; i < lista.length; i += 3) {
    console.log(lista[i]);
}

//estructura for ...  of

for (let valor of lista) {
    console.log(valor);
}

// estructura foreach

lista.forEach(valor => {
    console.log(valor);
})

//estructura for ... in
let persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    isDeveloper: true
}
console.log(persona.nombre);//Juan

let prop = "edad";
console.log(persona[prop]);//persona.edad

for (let propiedad in persona) {
    console.log(propiedad);//nombre, apellido, edad, isDeveloper
    console.log(persona[propiedad]);//muestra el valor de la propiedad
}