const PlatziMath = {};

PlatziMath.calcularPromedio = function calcularPromedio(lista) {
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

PlatziMath.calcularPromedioclick = function calcularPromedioclick(){
    // Obtiene el array desde el input y lo convierte en un array de números
    const inputArray = arrayInput.value.split(',').map(Number);

    // Verifica si el input contiene valores numéricos
    if (inputArray.some(isNaN)) {
        resultPromedio.innerText = 'Ingresa un array válido';
        return;
    }

    // Llama a la función calcularPromedio con el array obtenido
    const promedio = PlatziMath.calcularPromedio(inputArray);

    // Muestra el resultado en el HTML
    resultPromedio.innerText = `El promedio es: ${promedio}`;
};

btnCalcPromedio.addEventListener('click', PlatziMath.calcularPromedioclick);

///AHORA HARÉ LA MISMA LOGICA PERO UTILIZANDO .REDUCE <<----------


//el metodo .reduce lo que hace es recibir una lista de valores
//y reducirlos a todos a un simple valor
const arrayInput2 = document.querySelector('#arrayInput2');
const btnCalcPromedio2 = document.querySelector('#btnCalcPromedio2');
const resultPromedio2 = document.querySelector('#resultPromedio2');

PlatziMath.btnCalcPromedioreduce = function btnCalcPromedioreduce (){
    const inputArray2 = arrayInput2.value.split(',').map(Number);
    if(inputArray2.some(isNaN)) {
        resultPromedio2.innerText = 'ingresa un array válido';
        return;
    };
    function calcularPromedio2(valorAcumulado,nuevoValor) {
        return valorAcumulado + nuevoValor;
    };
    const metodoReduce = inputArray2.reduce(calcularPromedio2);
    const promedio2 = metodoReduce / inputArray2.length;
    resultPromedio2.innerText = `El promedio es ${promedio2}`;
};

btnCalcPromedio2.addEventListener('click', PlatziMath.btnCalcPromedioreduce);
///////////////////////////////////////////////////////////////////
//Calculando la mediana en una lista sin importar si es par o no //
///////////////////////////////////////////////////////////////////

const arrayInput3 = document.querySelector('#arrayInput3');
const btnCalcPromedio3 = document.querySelector('#btnCalcPromedio3');
const resultPromedio3 = document.querySelector('#resultPromedio3');


PlatziMath.calcularMediana = function calcularMediana() {
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

btnCalcPromedio3.addEventListener('click', PlatziMath.calcularMediana);
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
const btnCalcModa4 = document.querySelector('#btnCalcModa4');
const resultModa4 = document.querySelector('#resultModa4');

// Agrega un event listener al botón para calcular la moda


// Definición de la función para calcular la moda
PlatziMath.calcularModa = function calcularModa() {
    // Obtiene el valor actualizado del input y lo convierte en un array de números
    const arrayModa = arrayInput4.value.split(',').map(Number);

    // Crea un objeto para contar la frecuencia de cada elemento
    const listaCount = {};
    for (let i = 0; i < arrayModa.length; i++) {
        const elemento = arrayModa[i];
        if (listaCount[elemento]) {
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        }
    }

    // Convierte el objeto en un array de arrays (para facilitar el ordenamiento)
    const modaEntries = Object.entries(listaCount);

    // Ordena el array bidimensional según la frecuencia de los elementos
    modaEntries.sort((a, b) => b[1] - a[1]);

    // Obtiene la moda (el primer elemento del array ordenado)
    const moda = modaEntries[0][0];
    // Muestra la moda en algún lugar del documento HTML
    resultModa4.innerText = `La moda es: ${moda}`;
    
};

btnCalcModa4.addEventListener('click', PlatziMath.calcularModa);

//AHORA GUARDAREMOS TODAS LAS FUNCIONES EN OBJETOS 
// COLOC ANDOLE, PREVIO A LA FUNCION 
// EL NOMBRE DE NUESTRO OBJETO

//const Platzimath = {};

// una vez hecho esto, accederemos al NOMBRE DEL OBJETO
// en este caso PlatziMath y le agregaremos un punto.
//de esta es la forma se guardan elementos en un objeto,
// inmediatamente le ponemos el mismo nombre de la funcion
//(para no equivocarnos) y el signo de = luego la 
//declaracion de la formula que estabamos accediendo.
//quedando algo como:

//Platzimath.[/*nombre de funcion a la que accedemos*/] = /*funcion*/