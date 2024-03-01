//Playground: Encuentra el ID // clase 10/30

//respuesta sacada de los comentarios
const users = [];

//como ves lo primero que hacemos es declarar una variable

users.push({ id: 123, name: 'usuario1' });
users.push({ id: 456, name: 'usuario2' });

// luego con el metodo del array .push podemos ingresar elementos a dicho array

function solution(users, id) { //esta funcion va a utilizar dos parametros)
    const user = users.find(user => user.id == id);
    //utilizando el metodo de los array .find podemos recorrerlo
    //hasta encotrar ...
    console.log(user?.name || false);
    // aqui lo que haremos es imprimir en pantalla dos opciones OR user.name OR false
    //sucede que utilizamos ? para preguntar si el elemento user contiene un elemento .name 
    return; // cerramos la funcion
}

solution(users, 456);
solution(users, 999);

// aqui mandamos como llamado a la funcion solution dos argumentos
//users que hace referencia al array anteriormente declarado, y los numeros dentro
//hacen referencia a la pregunta de user?.name que es imprimido en pantalla
//que sigue la logica para comprender si gracias al buscadorde array .find 
//user => user.id == id y en ese caso imprimir user.name OR false

//CLASE 19 PLAYGROUND

//LA CONSIGNA ERA DEVOLVER DOS OBJETOS PERO ESTRUCTURADOS DIFERENTE
const obj = {
    123:'pepe',
    456:'maria',
};

function solutionObj(obj){
    const entries = Object.entries(obj);
    const transformedArray = [];
    for(const [key,value] of entries){
        const transformedObj = {
            id:key,
            name:value,
        }
    transformedArray.push(transformedObj);
    }
    return transformedArray;
};
console.log(solutionObj(obj));
//RESPONDE CORRECTAMENTE
// [ { id: '123', name: 'pepe' }, { id: '456', name: 'maria' } ]


//PLAYGROUND A PARTIR DE LA IA

const numeros1 = {
    1:1,
    2:4,
    3:9,
    4:16,
};
//Resultado esperado :
// [ {numero:1, cuadrado:1}, {numero:2, cuadrado:4},
//   {numero:3, cuadrado:9}, {numero:4, cuadrado:16}, ]

function playGroundIa1(obj){
    const recibimObj = Object.entries(obj);
    const arrayVacio = [];
    for(let [key, value] of recibimObj){
        const objDentroArray = {
            numero:key,
            cuadrado:value,
        };
    arrayVacio.push(objDentroArray);
    }
    return arrayVacio;
};
console.log(playGroundIa1(numeros1));

//segundo ejercicio
const numeros2 = {
    1:3,
    2:8,
    3:5,
    4:10,
};

// function playGroundIa2(obj){
//     const recibimObj = Object.entries(obj);
//     const arrayVacio = [];
//     for(let i=0;i<recibimObj.length;i++){
//         if(obj[i]){
//             calcular(recibimObj);
//         }else{
//             return;
//         }
//     }
//     function calcular(posicion1,posicion2){
//         if(posicion2%2){
//             const guardamos = arrayVacio.push(posicion2);
//         }
//     }
// }

// primero se que voy a recibir un objeto 
// y que debo transofrmarlo a un array/matriz bidimensional
// luego debere seleccionar al segundo elemento del array
// en la posicion 1. luego debo comparar dicha posicion con si es
// divisible entre 2. si lo es, meterla adentro del array vacio 
// y por ultimo sumar los valores de los elementos 

const numeros3 = {
    1: 3,
    2: 8,
    3: 5,
    4: 10,
    7:8
};

function playGroundIa2(obj) {
    const recibimObj = Object.entries(obj);
    let sumaPares = 0; // Variable para almacenar la suma de los números pares
    for (let i = 0; i < recibimObj.length; i++) {
        // Verifica si el valor es par
        if (recibimObj[i][1] % 2 === 0) {
            sumaPares += recibimObj[i][1]; // Suma el valor par al total
        }
    }
    return sumaPares; // Devuelve la suma de los números pares
}

console.log(playGroundIa2(numeros3)); 





