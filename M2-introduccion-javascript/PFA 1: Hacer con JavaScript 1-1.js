// Propuesta A

// Escribe un ciclo que haga siete llamadas a console.log para generar el siguiente triángulo:

// #

// ##

// ###

// ####

// #####

// ######

// #######
let triangulo = '#';
for(var i=0; i<7; i++){
    console.log(triangulo);
    triangulo += '#';
}

// Propuesta B

// Escribe un programa que use console.log para imprimir todos los números de 1 a 100, con dos excepciones. Para números divisibles por 3, imprime "Fizz" en lugar del número, y para los números divisibles por 5 (y no 3), imprime "Buzz" en su lugar.

for(var i=1; i<=100; i++){
    if(i%3==0){
        console.log('Fizz');
    }else if(i%5==0){
        console.log('Buzz');
    }else{
        console.log(i);
    }
}
