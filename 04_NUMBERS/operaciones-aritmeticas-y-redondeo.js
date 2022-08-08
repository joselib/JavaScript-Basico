//principales operaciones aritmeticas

let num = 10.2;
let num2 = 20.5;

//suma
console.log(num + num2);//30.7


//resta
console.log(num - num2);//-10.3

//multiplicacion
console.log(num * num2);//202.1

//division
console.log(num / num2);//0.4975

//representacion en string
let n_a=num.toString();//10.2
console.log(typeof (n_a))//string

// Redondeo de numeros decimales

let num3 = 1.2;
let num5 = num3 * 20.5;

console.log(num5);//209.1

//toFixed(x) se dee tener  cuidado porque convierte el numero a string
//limita el numero de decimales que se quiere mostrar que se le pasa como parametro x
//tambien se puede pasar la cantidad de decimales que se quiere mostrar aunque el numero no tenga decimales
console.log(num5.toFixed(2));//24.60
console.log(typeof (num5.toFixed(2)));//string

//.toPrecision()
//limita el numero de cifras significativas que se quiere mostrar

//ojo el toPrecision nos devuelve un string

let num4 = 1129.2020399300494;
console.log(num4.toPrecision(5));//1129.2
console.log(typeof (num4.toPrecision(5)));//string

