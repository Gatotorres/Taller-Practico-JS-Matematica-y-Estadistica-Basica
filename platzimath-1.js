//en este archivo introduciremos correctamente las funciones 
//dentro del objeto general, luego las llamaremos en scripts
//dentro de una nueva hoja de html, vinculando ambos scripts
//y en teoria, deberia funcionar, mostrar el objeto creado aqui
//en la otra hoja de javascript llamadoPlatziMath

const PlatziMath = {};

PlatziMath.calcularMediana = function calcularMediana(arrayInput3){
    const varArray = arrayInput3.value.split(',').map(Number);
    const var1 = varArray.sort((a, b) => a - b);
    console.log(var1);
    let mediana;
    if (var1.length % 2 === 0) {
            const index1 = var1.length / 2 - 1;
            const index2 = var1.length / 2;
            mediana = (var1[index1] + var1[index2]) / 2;
    } else {
            const index = Math.floor(var1.length / 2);
            mediana = var1[index];
            console.log(mediana);
    };
    return `[introduce un array  de x largo, separado por comas] La mediana es ${mediana}`;
};
PlatziMath.calcularModa = function calcularModa(arrayInput4){
        const arrayModa = arrayInput4.value.split(',').map(Number);
        const listaCount = {};
        for (let i = 0; i < arrayModa.length; i++) {
            const elemento = arrayModa[i];
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            };
        };
        const modaEntries = Object.entries(listaCount);
        modaEntries.sort((a, b) => b[1] - a[1]);
        const moda = modaEntries[0][0];
        return `[introduce un array  de x largo, separado por comas] La moda es: ${moda}`;
};
PlatziMath.calcularPromedio = function calcularPromedio(lista){
        let sumaLista = 0; 
        for(let i = 0; i < lista.length; i ++){ 
            sumaLista = sumaLista + lista[i];
            console.log(sumaLista);
        };
        const promedio = sumaLista / lista.length;
        console.log(promedio);
        return `[introduce un array  de x largo, separado por comas] El promedio es ${promedio}`;
};
PlatziMath.btnCalcPromedioreduce = function btnCalcPromedioreduce(arrayInput2){
    const inputArray2 = arrayInput2.value.split(',').map(Number);
    function calcularPromedio2(valorAcumulado,nuevoValor) {
        return valorAcumulado + nuevoValor;
    };
    const metodoReduce = inputArray2.reduce(calcularPromedio2);
    const promedio2 = metodoReduce / inputArray2.length;
    return `[introduce un array  de x largo, separado por comas] El promedio utilizando .reduce es ${promedio2}`;
};
PlatziMath.calcularPrecioConDescuento = function calcularPrecioConDescuento(inputPrice,inputDiscount){
    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);
    console.log({ discount, price });
    const newPrice = (price * (100 - discount)) / 100;
    const totalDiscount = price - newPrice;
    return ` [inputPrice ,inputDiscount] PrecioConDescuento ${newPrice}, 
    el descuento fué de ${totalDiscount}`;
};
PlatziMath.perimetroDeUnCuadrado = function perimetroDeUnCuadrado(lado1,lado2){
    const ladoCuadrado1 = Number(lado1.value);
    const ladoCuadrado2 = Number(lado2.value);
    const perimetroDeUnCuadrado = ladoCuadrado1*ladoCuadrado2;
    console.log(perimetroDeUnCuadrado);
    return `[lado * lado] perimetroDeUnCuadrado ${perimetroDeUnCuadrado}`;
};
PlatziMath.perimetroDeUnTriangulo = function perimetroDeUnTriangulo(lado1,lado2,base,altura){
    const ladoTriangulo1 = Number(lado1.value);
    const ladoTriangulo2 = Number(lado2.value);
    const baseTriangulo = Number(base.value);
    const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;
    console.log(perimetroTriangulo);
    return `[lado1,lado2,base,altura] y responde perimetroDeUnTriangulo ${perimetroDeUnTriangulo}`;
};
PlatziMath.areaDeUnTriangulo = function areaDeUnTriangulo(base,altura){
    const baseTriangulo = Number(base);
    const alturaTriangulo = Number(altura);
    const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
    console.log(areaTriangulo);
    return `[base,altura] y responde areaDeUnTriangulo ${areaTriangulo}`;
};
