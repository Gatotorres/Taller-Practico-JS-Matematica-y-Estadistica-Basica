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

