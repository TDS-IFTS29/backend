let array = [1, 2, 3, 4, 5];
for (let i in array) {
    console.log(array[i]);
}

const numbers = [1, 2, 3, 4, 5];
const  squadNumbers = numbers.map((number) => number * number);
console.log(squadNumbers);
