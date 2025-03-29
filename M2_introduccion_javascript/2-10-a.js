let x = 10;
if (true) {
    let y = 20;
    let z = 30;
    console.log(x + y + z); // 60
    //60    
}
console.log(x + z); // ReferenceError: y is not defined
//