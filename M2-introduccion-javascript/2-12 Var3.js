var a = 1;
function testVar(){
    var a = 2;
    console.log(a); // 2
}

testVar();
console.log(a); // 1