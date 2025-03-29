const humus = function (factor){
    const ingredientes = function (cantidad, unidad, nombre){
        let cantidadIngrendietes = cantidad * factor;
        if (cantidadIngrendietes > 1){
            unidad += 's';
        }
        console.log(`${cantidadIngrendietes} ${unidad}  ${nombre}`);
    };
    ingredientes(1, 'taza', 'garbanzos');
    ingredientes(0.5, 'taza', 'tahini');
    ingredientes(0.25, 'taza', 'agua');
    ingredientes(0.25, 'cucharada', 'ajo');
    ingredientes(0.5, 'cucharada', 'sal');
    ingredientes(0.5, 'cucharada', 'comino');
    ingredientes(0.5, 'cucharada', 'pimienta');
    ingredientes(2, 'cucharada', 'limón');
};

humus(2);