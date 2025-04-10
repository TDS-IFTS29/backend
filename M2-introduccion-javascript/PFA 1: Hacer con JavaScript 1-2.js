// Propuesta A

// Tenemos un array de objetos que representan datos de productos con los siguientes atributos: nombre precio stock. 
// Por ejemplo: 
                      
// const productos = [
//  { nombre: 'Gaseosa 1.5L', stock: 46, precio: 1000 },
//  { nombre: 'Chocolate', stock: 9, precio: 80 },
//  { nombre: 'Chicles', stock: 19, precio: 50 }
// ];
// Debemos agregar y calcular una nueva propiedad llamada "impuesto", la cual debe ser del 30% con base al precio base. Por ejemplo si aplicamos el 30% de impuestos para un producto con precio de $1000 el resultado será de $300, o para un producto con precio de $500 el resultado será $150.

// Para solucionarlo debemos encontrar una función llamada addNewAttr que recibe un parámetro de entrada un array de objetos, la cual debe agregar esta nueva propiedad “impuesto” a cada objeto del arra

const productos = [
   { nombre: 'Gaseosa 1.5L', stock: 46, precio: 1000 },
   { nombre: 'Chocolate', stock: 9, precio: 80 },
   { nombre: 'Chicles', stock: 19, precio: 50 }
 ];
 
console.log(productos); // Antes de agregar el impuesto

function addNewAttr(array) {
   return array.map((product) => {
     product.impuesto = Math.round(product.precio * 0.3);
     return product;
   });
}
  

//OTRA FORMA
//  function addNewAttr(array) {
//    array.forEach(function(item) {
//      item.impuesto = item.precio * 0.3;
//    });
//    return array;
//  }
 
 addNewAttr(productos);
 
 console.log(productos); // Después de agregar el impuesto
 
//  Propuesta B

//  Tenemos un array de objetos que representan órdenes de compra con los siguientes atributos: 
//  Por ejemplo
//  cliente: string
 
//  montoTotal: number
 
//  entregado: boolean
 
//  Por ejemplo:
 
//  const ordenes = [
//   { cliente: 'Tomas Gutierrez', montoTotal: 260, entregado: true },
//   { cliente: 'Ines Perez', montoTotal: 956, entregado: false },
//   { cliente: 'Renata Echeverría', montoTotal: 1670, entregado: true }
//  ];
//  Debemos filtrar todas las órdenes de compra que cumplan con la condición de tener un monto total mayor o igual a $500 y que hayan sido entregadas (“entregado” = true)
 
//  Para solucionarlo debemos crear una función llamada filterOrders que recibe un array de entrada.
const ordenes = [
   { cliente: 'Tomas Gutierrez', montoTotal: 260, entregado: true },
   { cliente: 'Ines Perez', montoTotal: 956, entregado: false },
   { cliente: 'Renata Echeverría', montoTotal: 1670, entregado: true }
  ];

console.log(ordenes); // Antes de filtrar
 
function filterOrders(array) {
   return array.filter((order) => order.montoTotal >= 500 && order.entregado === true);
}
 
 ;

 console.log(filterOrders(ordenes)); // Después de filtrar
