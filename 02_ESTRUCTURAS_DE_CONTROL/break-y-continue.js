//Casos muy especificos  - break y continue

let lista = [1, 2, 3, 4, 5, 6, 7, 8, ];

for (let i = 0; i < lista.length; i++){

    if (lista[i] === 3) { //si encuentra el 3, sale del ciclo
        
        continue;
    }
    console.log(lista[i]);//imprime los elementos de la lista
    if (lista[i] >= 5){
        break;
    }
  
}
//Cual es el ambito de un bucle
//como buenas practicas let i se declara dentro del ciclo
console.log(i)//imprime el valor de i en el ambito del ciclo cuando se declar como VAR y no como LET 