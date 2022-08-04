// comparaciones 

// == igual a
let a = 10;
let b = 10;

if (a == b) {
    console.log('son iguales');//comparacion dedil
}

// === identico a
if (a === b) {
    console.log('son identicos');//comparacion de tipo y valor
}

// != diferente a

let c = 10;
let d = '10';

if (c != d) {
    console.log('son iguales'); //comparacion solo de valor
}
// !== no identico a
if (c !== d) {
    console.log('son diferentes');//comparacion de tipo y valor
}



// > mayor que
let max = 10;
let min = 5;
if (max > min) {
    console.log('max es mayor que min');
}

// < menor que
if (max < min) { 
    console.log('max es menor que min');
}
// >= mayor o igual que
if (max >= min) { 
    console.log('max es mayor o igual');
}
// <= menor o igual que
if (min <= max) { 
    console.log('max es menor o igual');
}