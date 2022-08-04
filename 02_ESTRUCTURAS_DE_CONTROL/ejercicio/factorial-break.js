//calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let numero = 10;
let factorial = 1;

while (true) {
    factorial *= numero;
    numero--;
    if (numero === 0) {
        break;
    }
}
console.log(factorial);// el factorial es 3628800