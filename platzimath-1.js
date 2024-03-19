//en este archivo introduciremos correctamente las funciones 
//dentro del objeto general, luego las llamaremos en scripts
//dentro de una nueva hoja de html, vinculando ambos scripts
//y en teoria, deberia funcionar, mostrar el objeto creado aqui
//en la otra hoja de javascript llamadoPlatziMath

const PlatziMath = {};

PlatziMath.calcularMediana = function calcularMediana(arrayInput3){
    const varArray = arrayInput3.map(Number);
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
    };
    console.log(`[introduce un array  de x largo, separado por comas] La mediana es ${mediana}`)
    return mediana;
};
PlatziMath.calcularModa = function calcularModa(arrayInput4) {
    // Crear un objeto para contar la frecuencia de cada elemento
    const listaCount = {};
    
    // Contar la frecuencia de cada elemento en el array
    for (let i = 0; i < arrayInput4.length; i++) {
        const elemento = arrayInput4[i];
        if (listaCount[elemento]) {
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        };
    };
    // Convertir el objeto en un array de arrays (para facilitar el ordenamiento)
    const modaEntries = Object.entries(listaCount);
    // Ordenar el array bidimensional según la frecuencia de los elementos
    modaEntries.sort((a, b) => b[1] - a[1]);
    // Obtener la moda (el primer elemento del array ordenado)
    const moda = modaEntries[0][0];
    // Devolver el resultado como un mensaje
    return `[introduce un array  de x largo, separado por comas] La moda es: ${moda}`;
};
PlatziMath.calcularPromedio = function calcularPromedio(lista){
        let sumaLista = 0; 
        for(let i = 0; i < lista.length; i ++){ 
            sumaLista = sumaLista + lista[i];
        };
        const promedio = sumaLista / lista.length;
        return `[introduce un array  de x largo, separado por comas] El promedio es ${promedio}`;
};
PlatziMath.btnCalcPromedioreduce = function btnCalcPromedioreduce(arrayInput2){
    // Elimina esta línea, ya que no necesitas convertir arrayInput2 en un número
    // const inputArray2 = Number(arrayInput2);
    
    // Verifica que arrayInput2 sea un array antes de usar el método reduce
    if (!Array.isArray(arrayInput2)) {
        console.error('El argumento debe ser un array');
        return;
    }

    function calcularPromedio2(valorAcumulado, nuevoValor) {
        return valorAcumulado + nuevoValor;
    };

    const metodoReduce = arrayInput2.reduce(calcularPromedio2);
    const promedio2 = metodoReduce / arrayInput2.length;
    return `[introduce un array  de x largo, separado por comas] El promedio utilizando .reduce es ${promedio2}`;
};
PlatziMath.calcularPrecioConDescuento = function calcularPrecioConDescuento(inputPrice,inputDiscount){
    const price = inputPrice;
    const discount = inputDiscount;
    const newPrice = (price * (100 - discount)) / 100;
    const totalDiscount = price - newPrice;
    return `inputPrice ,inputDiscount PrecioConDescuento ${newPrice}, 
    el descuento fué de ${totalDiscount}`;
};
PlatziMath.perimetroDeUnCuadrado = function perimetroDeUnCuadrado(lado1,lado2){
    const ladoCuadrado1 = Number(lado1);
    const ladoCuadrado2 = Number(lado2);
    const perimetroDeUnCuadrado = ladoCuadrado1*ladoCuadrado2;
    
    return `lado * lado perimetroDeUnCuadrado ${perimetroDeUnCuadrado}`;
};
PlatziMath.hayarAlturaTriangulo = function(lado1, lado2, lado3){
    const a = Number(lado1);
    const b = Number(lado2);
    const c = Number(lado3);

    const s = (a + b + c) / 2; // Semiperímetro

    const altura = 2 * Math.sqrt(s * (s - a) * (s - b) * (s - c)) / a; // Fórmula de Herón
    return `Los lados son ${a}, ${b}, ${c}. La altura del triángulo es ${altura}`;
};
PlatziMath.perimetroDeUnTriangulo = function perimetroDeUnTriangulo(lado1, lado2, base){
    const ladoTriangulo1 = Number(lado1);
    const ladoTriangulo2 = Number(lado2);
    const baseTriangulo = Number(base);
    const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
    return `perimetroDeUnTriangulo ${perimetroTriangulo}`;
};
PlatziMath.areaDeUnTriangulo = function areaDeUnTriangulo(base,altura){
    const baseTriangulo = Number(base);
    const alturaTriangulo = Number(altura);
    const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
    return `base,altura y responde areaDeUnTriangulo ${areaTriangulo}`;
};

