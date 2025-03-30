// console.log('El futuro dice:', futuro());
// function futuro() {
//  return 'Nunca tendran autos voladores';
// }

//---------------------------------------
        
// const hacerSonido = function(){
//     console.log('Pling!');
// };
// hacerSonido();

// const potencia = function (base, exponente){
//     let resultado = 1;
//     for (let cuenta = 0 ; cuenta < exponente; cuenta ++){
//         resultado * = base;
//     }
// }

//FUNCIONES FLECHAS
// EN LA GUIA HAY MAS EJEMPLOS DE COMO USAR DE FORMA ABREVIADA

// const potencia = (base, exponente) => {
//     let resultdo = 1;
//     for (let cuenta = 0 ; cuenta < exponente; cuenta ++){
//         resultdo *= base;        
//     }
//     return resultdo;
// }
// console.log(potencia(2,10));

//-----------------------
// FUNCION RECURSIVA

function potencia(base, exponente) {
    if (exponente == 0) {
      return 1;
    } else {
      return base * potencia(base, exponente - 1);
    }
   }
   console.log(potencia(2, 3));
   // → 8
           