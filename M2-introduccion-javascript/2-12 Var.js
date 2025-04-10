function explainVar() {
 var a = 10;
 console.log(a); // 10
 if (true) {
     var a = 20;
     console.log(a); // 20
 }
 console.log(a); // 20
}
explainVar();

//otro ejemplo
var a = 1;
function testVar(){
    var a = 2;
    console.log(a); // 2
}
testVar();
console.log(a); // 1




