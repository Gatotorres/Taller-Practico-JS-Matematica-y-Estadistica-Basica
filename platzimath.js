function calcularPromedio(lista) {
    let sumaLista = 0; // aca establecemos una lista y la establecemos en 0

    //aca con el ciclo for le establecemos una variable i en cero también
    //luego que la i es menor al largo del array Lista, esto para que lo recorra
    //y luego le pedimos que aumente el valor de i en 1 y así sucesivamente 
    //mientras i sea menor al largo de la lista.
    for(let i = 0; i < lista.length; i ++){ 
        sumaLista = sumaLista + lista[i];
        //acá re inicializamos la variable en 0, y le decimos que es ella misma (0)
        //más el array Lista en la posición i
        console.log(sumaLista);
        //aqui simplemente imprimimos sumaLista para que siempre al terminar un ciclo nos diga 
        //la cuenta por la que va
    }
    const promedio = sumaLista / lista.length;
    //ahora declaramos una variable promedio para establecer la logica
    //donde a suma lista, que simplemente lo que hace es sumar todos los elementos que 
    //contenga el array introducido.
    //y dividirlo por el largo de la lista lista.length 
    //(es parte de la logica de calcular el promedio)
    
    console.log(promedio); // aqui imprimimos el promedio en pantalla
    return promedio; //y con este return la función devuelve como mensaje final el promedio
}


// Agrega estos elementos al inicio de tu archivo JavaScript
const arrayInput = document.querySelector('#arrayInput');
const btnCalcPromedio = document.querySelector('#btnCalcPromedio');
const resultPromedio = document.querySelector('#resultPromedio');

// Agrega un evento click al botón para calcular el promedio
btnCalcPromedio.addEventListener('click', () => {
    // Obtiene el array desde el input y lo convierte en un array de números
    const inputArray = arrayInput.value.split(',').map(Number);

    // Verifica si el input contiene valores numéricos
    if (inputArray.some(isNaN)) {
        resultPromedio.innerText = 'Ingresa un array válido';
        return;
    }

    // Llama a la función calcularPromedio con el array obtenido
    const promedio = calcularPromedio(inputArray);

    // Muestra el resultado en el HTML
    resultPromedio.innerText = `El promedio es: ${promedio}`;
});

///AHORA HARÉ LA MISMA LOGICA PERO UTILIZANDO .REDUCE <<----------
function calcularPromedio2(valorAcumulado,nuevoValor) {
    return valorAcumulado + nuevoValor;
};

//el metodo .reduce lo que hace es recibir una lista de valores
//y reducirlos a todos a un simple valor
const arrayInput2 = document.querySelector('#arrayInput2');
const btnCalcPromedio2 = document.querySelector('#btnCalcPromedio2');
const resultPromedio2 = document.querySelector('#resultPromedio2');

btnCalcPromedio2.addEventListener('click', () => {
    const inputArray2 = arrayInput2.value.split(',').map(Number);
    if(inputArray2.some(isNaN)) {
        resultPromedio2.innerText = 'ingresa un array válido';
        return;
    }

    const metodoReduce = inputArray2.reduce(calcularPromedio2);
    const promedio2 = metodoReduce / inputArray2.length;
    resultPromedio2.innerText = `El promedio es ${promedio2}`;
});

///////////////////////////////////////////////////////////////////
//Calculando la mediana en una lista sin importar si es par o no //
///////////////////////////////////////////////////////////////////

const arrayInput3 = document.querySelector('#arrayInput3');
const btnCalcPromedio3 = document.querySelector('#btnCalcPromedio3');
const resultPromedio3 = document.querySelector('#resultPromedio3');

btnCalcPromedio3.addEventListener('click', calcularMediana);

function calcularMediana() {
    const varArray = arrayInput3.value.split(',').map(Number);
    const var1 = varArray.sort((a, b) => a - b);
    console.log(var1);

    let mediana;
    if (var1.length % 2 === 0) {
        const index1 = var1.length / 2 - 1;
        const index2 = var1.length / 2;
        mediana = (var1[index1] + var1[index2]) / 2; // Calcular la media de los dos números del medio
    } else {
        const index = Math.floor(var1.length / 2);
        mediana = var1[index];
        console.log(mediana) // Obtener el número en la posición de la mitad
    }

    resultPromedio3.innerText = `La mediana es ${mediana}`;
};

///////////////////////////////////////////////////////////////////
//Calculando la moda en una lista //
///////////////////////////////////////////////////////////////////

//como transformar un objeto en un array
//se puede con objet.key() objet.value() y objet.entries()
//luego seleccionar al mas grande pero de los elementos que se acumulan,
//no del valor del .key, sino del .value

//entonces llamemos a los elementos HTML 
// .split() .map() .sort() y Math.floor()

const arrayInput4 = document.querySelector('#arrayInput4');
const btnCalcPromedio4 = document.querySelector('#btnCalcPromedio4');
const resultPromedio4 = document.querySelector('#resultPromedio4');

btnCalcPromedio4.addEventListener('click', calcularMedia);

function calcularModa(){
    const arrayModa = arrayInput4.value.split(',').map(Number);
    const modaOrdenada = arrayModa.sort((a,b)=>a-b);
    const modaObjeto = {modaOrdenada};
    const modaEntries = modaOrdenada.entries();
    console.log(modaEntries);
    console.log(modaObjeto);
}


//
// codigo y razonamiento del profe
// 
//
function calcularModa(lista) {
    const listaCount = {};
    for (let i = 0; i < lista.length; i++){ 
        const elemento = lista[i];
        if (listaCount[elemento]){ 
            listaCount[elemento] += 1;
        }else { listaCount[elemento] = 1;
        }
    }
    const listaArray = Object.entries(listaCount);
    const listaOrdenada = ordenarListaBidimensional(listaArray, 1)
    const listaMaxNumber = listaOrdenada[listaOrdenada.length - 1];
    const moda = listaMaxNumber[0]; 
    return moda;
}

// function ordenarLista(listaDesordenada){
//     function ordenarListaSort(valorAcumulado, nuevoValor){
//         return valorAcumulado - nuevoValor;
//     }
//     const lista = listaDesordenada.sort(ordenarListaSort);
//     return lista;
// }

function ordenarListaBidimensional(listaDesordenada, i){
    function ordenarListaSort(valorAcumulado, nuevoValor){
        return valorAcumulado[i] - nuevoValor[i];
    }
    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;
}