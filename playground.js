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