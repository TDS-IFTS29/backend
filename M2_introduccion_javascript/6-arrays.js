let array = [1, 2, 3, 4, 5];
for (let i in array) {
    console.log(array[i]);
}

const numbers = [1, 2, 3, 4, 5];
const  squadNumbers = numbers.map((number) => number * number);
console.log(squadNumbers);


let task = [
    {name: 'Tarea de matemmatica', duration: 120},
    {name: 'Jugar videojuegos', duration: 60},
    {name: 'Visitar a la abuela', duration: 240} 
 
];

let difficult_tasks = task.filter(task => task.duration >= 120);

console.log(difficult_tasks);