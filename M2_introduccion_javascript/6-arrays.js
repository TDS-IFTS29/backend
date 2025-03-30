// let array = [1, 2, 3, 4, 5];
// for (let i in array) {
//     console.log(array[i]);
// }

// //maps tranformar cada elemento 
// const numbers = [1, 2, 3, 4, 5];
// const  squadNumbers = numbers.map((number) => number * number);
// console.log(squadNumbers);


// let task = [
//     {name: 'Tarea de matemmatica', duration: 120},
//     {name: 'Jugar videojuegos', duration: 60},
//     {name: 'Visitar a la abuela', duration: 240} 
 
// ];

// //filter
// let difficult_tasks = task.filter(task => task.duration >= 120);

// console.log(difficult_tasks);

// //reduce

// const array = [1, 2, 3, 4];
// const initialValue = 3;	
// const sumWithInitial = array.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

// console.log(sumWithInitial); 

//Manipulación de arrays


//MÉTODOS PUSH Y POP. Términos tradicionales de las pilas (stacks) en programación.
// PUSH: Añadir un elemento al final de la lista.
// POP: Sacar el último elemento de la lista.

//Método PUSH

// let secuencia = [1, 2, 3];
// secuencia.push(4);
// secuencia.push(5);
// console.log(secuencia);

// //Método POP

// secuencia.pop();
// console.log(secuencia);


// OBJECTO LITERAL (no es lo mimso que la instancia de una clase)
// let persona ={
//     nombre: ['Juan', 'Pérez'],
//     edad: 30,
//     genero: 'masculino',
//     intereses: ['programación', 'fútbol', 'música'],
//     bio: function() {
//         console.log(
//             this.nombre[0] + ' ' + this.nombre[1] + ', ' + this.edad + ' años, ' + this.genero +
//             ', ' + this.intereses.join(', ')+ '.'
//             );
// }, 
// saludo: function() {
//     console.log('Hola, soy ' + this.nombre[0] + '.');
// }
// };
// persona.bio();
// persona.saludo();
// // console.log(persona.nombre[0]); // Juan


// //ESPACIO DE NOMBRES SECUNDARIOS (sub-namespace).
// let persona = {
//     nombre: {
//         pila: 'Bob',
//         apellido: 'Smith'
//     }
// };

// console.log(persona.nombre.pila); // Resultado: "Bob"
// console.log(persona.nombre.apellido); // Resultado: "Smith"


// //NOTACION DE CORCHETES
// let persona = {
//     nombre: 'Carlos',
//     edad: 40
//   };
  
//   let propiedad = 'nombre';
//   persona[propiedad] = 'Marcos';  // Cambia el nombre
  
//   console.log(persona);  // { nombre: 'Marcos', edad: 40 }
  
//   propiedad = 'altura';
//   persona[propiedad] = '1.80m';   // Agrega una nueva propiedad
  
//   console.log(persona);  // { nombre: 'Marcos', edad: 40, altura: '1.80m' }
  





//Establecer miembros de objetos

// Significa asignar un valor a una propiedad del objeto. Esto puede ser:

// Actualizar una propiedad que ya existe

// Agregar una nueva propiedad

// Agregar una función (método) al objeto

// Y se puede hacer con notación de punto o notación de corchetes.

//Ejemplo 1: Actualizar una propiedad existente
// let persona = {
//     nombre: {
//       apellido: 'Pérez'
//     },
//     edad: 30
//   };
  
//   persona.edad = 45;  // Actualizamos la edad
//   persona['nombre']['apellido'] = 'Cratchit'; // Actualizamos el apellido
  
//   console.log(persona.edad); // 45
//   console.log(persona['nombre']['apellido']); // Cratchit
  
//   //Ejemplo 2: Agregar una nueva propiedad

//   persona['direccion'] = '9 de julio 658';

//   console.log(persona.direccion); // "9 de julio 658"
  
// //Ejemplo 3: Agregar un método (función)
// persona.despedida = function () {
//     console.log('¡Adiós a todos!');
//   };
  
//   persona.despedida();  // Muestra: ¡Adiós a todos!
  


//6.12. ¿Qué es "this" (este)?
/*
Se refiere al objeto actual en el que se está escribiendo el código,
 por lo que en este caso `this` es equivalente a la `persona`. 
*/

// let persona1 = {
//     nombre: 'Chris',
//     saludo: function () {
//       console.log('¡Hola!, Soy ' + this.nombre + '.');
//     }
//    };
   
//    let persona2 = {
//     nombre: 'Brian',
//     saludo: function () {
//       console.log('¡Hola!, Soy ' + this.nombre + '.');
//     }
//    };            

//    persona1.saludo(); // Muestra: ¡Hola!, Soy Chris.
//    persona2.saludo(); // Muestra: ¡Hola!, Soy Brian.

// //Operadores con objetos

// console.log('nombre' in persona1);
// //true
// console.log('legajo' in persona1);
// //false
            

//Object.keys()

//La función Object.keys(objeto) te devuelve un array 
// // (arreglo) con los nombres de las propiedades de un objeto.

// let punto = { x: 0, y: 0, z: 2 };

// console.log(Object.keys(punto));
// // Resultado: ["x", "y", "z"]

// 🧠 ¿Para qué sirve?
// Para saber qué propiedades tiene un objeto.

// Para recorrer un objeto dinámicamente.

// Para mostrar propiedades en una tabla, una lista, o en la consola.

// //ejemplo 
// let persona = {
//     nombre: 'Ana',
//     edad: 25,
//     ciudad: 'Córdoba'
//   };
  
//   Object.keys(persona).forEach(function(clave) {
//     console.log(clave + ': ' + persona[clave]);
//   });
  
//   //si querés los valores
//   console.log(Object.values(persona));
// // Resultado: ["Ana", 25, "Córdoba"]


// // si querés tanto claves como valores
// console.log(Object.entries(persona));
// // Resultado: [["nombre", "Ana"], ["edad", 25], ["ciudad", "Córdoba"]]

//PROTOTIPOS EN JAVA SCRIPT

// ¿Qué es un prototipo en JavaScript?
// En JavaScript, todos los objetos tienen una propiedad interna llamada [[Prototype]], que es una referencia a otro objeto. Ese objeto prototipo puede tener propiedades y métodos que se comparten (heredan) entre los objetos que lo referencian.

// Esta es la base del sistema de herencia prototípica de JavaScript.

//FUNCION CONSTRUCTURA
 function Persona(nombre, apellido, edad, genero, intereses) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.genero = genero;
    this.intereses = intereses;
  }
  
  let person1 = new Persona('Bob', 'Smith', 32, 'hombre', ['música', 'ski']);

  //agregar metodo
  Persona.prototype.saludar = function() {
    console.log(`Hola, soy ${this.nombre}`);
  };

  // si en vez de usar prototipo la colocamos dendro del constructor no es eficiente  