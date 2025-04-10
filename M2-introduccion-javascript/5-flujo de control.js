// camino recto

// let elNumero = Number(prompt('Elige un numero'));
// console.log(`Tu número es la raiz cuadrada de ${elNumero * elNumero}`);

//IF

// let elNumero = Number(prompt('Elige un numero'));
// if (!Number.isNaN(elNumero)) {
//     console.log(`Tu número es la raiz cuadrada de ${elNumero * elNumero}`);
// }
// else {
//     console.log('No es un numero');
// }

//IF ANIDADO

// let elNumero = Number(prompt('Elige un numero'));
// if(elNumero  <10 ) {
//     console.log('Pequeño');
// }
// else if (elNumero < 100) {
//     console.log('Mediano');
// }
// else{
//     console.log('Grande');
// }

//CICLOS
// WHILE

// let numero = 0;
// while (numero <= 12){
//     console.log(numero);
//     numero = numero + 2;
// }

//DO WHILE

// let tuNombre;
// do {
//     tuNombre = prompt('Escribe tu nombre');
// }
// while (!tuNombre);
// console.log(`Hola ${tuNombre}`);

//FOR

for (let numero = 0; numero <= 12; numero = numero + 2) {
    console.log(numero);
}

let resultado = 1;
for (let contador = 0; contador < 10; contador++) {
    resultado *= 2;
}
console.log(resultado);

for (let actual = 20; actual = actual +1;){
    if (actual % 7 == 0) {
        console.log(actual);
        break;
    }
}