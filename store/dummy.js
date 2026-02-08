const db = {
    'user': [
        { id: '1', name: 'Carlos' },
        { id: '2', name: 'Ana' },
    ],
};

async function list(tabla) { // async es una palabra reservada que se utiliza para declarar una función asíncrona, esto nos permite utilizar la palabra reservada await dentro de la función, lo que nos permite esperar a que una promesa se resuelva antes de continuar con la ejecución del código, esto es útil para evitar el callback hell y para escribir código más limpio y legible.
    return db[tabla];
}

async function get(tabla, id) {
    let col = await list(tabla);
    return col.filter(item => item.id === id)[0] || null;
}

async function upsert(tabla, data) {
    db[tabla].push(data);
}

async function remove(tabla, id) {
    let col = await list(tabla);
    db[tabla] = col.filter(item => item.id !== id);
}

module.exports = {
    list,
    get,
    upsert,
    remove,
};