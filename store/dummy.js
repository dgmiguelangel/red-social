const db = {
    'user': [
        { id: 1, name: 'Carlos' },
    ],
};

async function list(tabla) {
    return db[tabla];
}

async function get(tabla, id) {
    let col = list(tabla);
    return col.filter(item => item.id === id)[0] || null;
}

async function upsert(tabla, data) {
    db[tabla].push(data);
}

async function remove(tabla, id) {
    let col = list(tabla);
    db[tabla] = col.filter(item => item.id !== id);
}

module.exports = {
    list,
    get,
    upsert,
    remove,
};