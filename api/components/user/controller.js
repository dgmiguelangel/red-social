//const store = require('../../../store/dummy');
const { nanoid } = require('nanoid');
const auth = require('../auth');

const TABLA = 'user';

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/mysql');
    }

    function list() {
        return store.list(TABLA);
    }

    function get(id) {
        return store.get(TABLA, id);
    }

    async function insert(body) {
        const user = {
            id: nanoid(),
            name: body.name,
            username: body.username,            
        }

        if (body.password || body.username) {
            await auth.upsert({
                id: user.id,
                username: user.username,
                password: body.password,
            }, 'insert')
        }
            
        return store.insert(TABLA, user);
    }   
    
    async function update(body) {
        const user = {
            id: body.id,
            name: body.name,
            username: body.username           
        }

        if (body.password || body.username) {
            await auth.upsert({
                id: user.id,
                username: user.username,
                password: body.password,
            }, 'update')
        }
            
        return store.update(TABLA, user);
    }   

    async function remove(id) {
        await auth.remove(id);
        return store.remove(TABLA, id);
    }

    return {
        list,
        get,        
        insert,
        update,
        remove
    };
}

/*
function upsert(body) {       
    return store.upsert(TABLA, body);
} 

function upsert(id, name) {
    return store.upsert(TABLA, { id, name });
}
*/
