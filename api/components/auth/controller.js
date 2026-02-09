const TABLA = 'auth';

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    }

    function list() {
        return store.list(TABLA);
    }

    function upsert(data, operation) {
        console.log('operation', operation);
        console.log('data', data);

        const authData = {
            id: data.id,
        }

        if (data.username) {
            authData.username = data.username;
        }

        if (data.password) {
            authData.password = data.password;
        }

        if (operation === 'insert') {
            return store.insert(TABLA, authData);
        } else if (operation === 'update') {
            return store.update(TABLA, authData);
        }   
    }

    return {
        list,
        upsert
    };
};