const express = require('express'); // importamos express para crear el servidor

const config = require('../config.js');
const user = require('./components/user/network');

const app = express(); // creamos el servidor

// ROUTER
app.use('/api/user', user); // cada vez que se haga una petición a /api/user, se va a ejecutar el router que se encuentra en ./components/user/network.js

app.listen(config.api.port, () => {
    console.log('Api escuchando en el puerto ', config.api.port);
});