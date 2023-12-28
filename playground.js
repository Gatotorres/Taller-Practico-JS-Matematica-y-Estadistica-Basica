//Playground: Encuentra el ID // clase 10/30

//respuesta sacada de los comentarios
const users = [];

users.push({ id: 123, name: 'usuario1' });
users.push({ id: 456, name: 'usuario2' });

function solution(users, id) {
    const user = users.find(user => user.id == id);
    console.log(user?.name || false);
    return;
}

solution(users, 456);
solution(users, 999);
