var i = 60;
function explainVariable(){
    for (var i = 0; i < 5; i++) {
        console.log(i); // 0 1 2 3 4
    }
};
explainVariable();
console.log('Despues del loop',i); 