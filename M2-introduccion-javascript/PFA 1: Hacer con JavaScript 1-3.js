// <!-- Enunciado

// Dado el array = [1,2,3,4,5,6], implementa en casa caso el código que resuelva las siguientes consignas:


let array = [1,2,3,4,5,6];


// 1 - Itera todos los elementos dentro del array utilizando while y mostrarlos en consola.
console.log('**********1**********');
let i = 0;
while(i<array.length){
    console.log(array[i]);
    i++;
}


// 2 - Itera todos los elementos dentro del array utilizando for y mostrarlos en consola.
console.log('**********2**********');
for(let i = 0; i<array.length; i++){
    console.log(array[i]);
}

// 3 - Itera todos los elementos dentro del array utilizando .forEach y mostrarlos en consola.
console.log('**********3**********');
array.forEach(function(elemento){
    console.log(elemento);
}
);

// 4 - Mostrar todos los elementos dentro del array sumándole uno a cada uno.
console.log('**********4**********');


const array2 = [1, 2, 3, 4, 5, 6];


for (let i = 0; i < array2.length; i++) {
 array2[i] += 1;
 console.log(array2[i]);
}


//otra solucón
// let array2 = array.map(function(elemento){
//     return elemento + 1;
// });
// console.log(array2);


// 5  Generar una copia del array pero con todos los elementos incrementado en 1.
console.log('**********5**********');

let array3 = [];
array.forEach(function(elemento){
    array3.push(elemento + 1);
});

console.log(array3);



// 6 - Calcular el promedio -->OTRA SOLUCIÓN
// console.log('**********6**********');
// let suma = 0;
// array.forEach(function(elemento){
//     suma += elemento;
// });

// let promedio = suma / array.length;
// console.log(promedio);


// const array = [1, 2, 3, 4, 5, 6];


// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//  sum += array[i];
// }


// const average = sum / array.length;
// console.log(average);