//ALT + SHIFT + F = IDENTA EL CODIGO Y LO ORDENA

//MUESTRA EL VALOR MAS GRANDE
console.log(Math.max(4, 5));

//SE MUESTRA EL LOG SI LO INGRESADO ES SOLAMENTE UN NUMERO DE LO CONTRARIO NO PASA NADA
let theNumber = Number(prompt('Pick a number'));
if (!Number.isNaN(theNumber)) {
  console.log('Your number is the square root of ' + theNumber * theNumber);
}

//CALCULAR LA POTENCIA DE UN NUMERO
let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);

//BUSCA EL PRIMER NUMERO QUE SEA MULTIPLO DE 7 Y FINALIZA EL PROGRAMA CON LA DECLARACION BREAK
for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}

/* numero aleatorio entre 1 y 100 */
/* console.log(Math.round(Math.random() * 100)); */

/* formula para generar numeros aleatorios entre un numero y otro */
/* console.log(Math.random() * (max-min)+min) */
/* console.log(Math.round(Math.random() * (100 - 50) + 50))*/

//PARA SABER SI UN NUMERO ES PAR O IMPAR

if (numero % 2 === 0) {
  console.log(`${numero} es par`);
} else {
  console.log(`${numero} es impar`);
}

//PARA SACAR EL FACTORIAL DE UN NRO

let numero = Number(prompt('Introduce un numero por favor'));
let resultado = 1;

for (let i = numero; i > 1; i--) {
  resultado *= i;
}

console.log(resultado);

//PARA ORDENAR NUMEROS DE MENOR A MAYOR

console.log(numeros.sort((a, b) => a - b)); //Con esto comparamos todos los numeros y los ordenamos

//RECORRER ARRAYS

let numeros = [1, 3, 6, 9];

//CON FOR NORMAL
for (let i = 0; i <= numeros.length; i++) {
  console.log(numeros[i]);
}

//CON FOR OF
for (let numero of numeros) {
  console.log(numero);
}

//CON FOREACH
numeros.forEach((numero, index) =>
  console.log(`${numero} esta en la posicion ${index}`)
);
