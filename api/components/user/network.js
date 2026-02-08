const express = require('express');

const response = require('../../../network/response');
const Controller = require('./controller');

const router = express.Router(); // el router es un objeto que nos permite manejar las rutas de nuestra aplicación, es como un mini servidor dentro de nuestro servidor principal, nos permite manejar las rutas de una manera más organizada y modularizada, cada vez que se haga una petición a /api/user, se va a ejecutar el router que se encuentra en ./components/user/network.js

router.get('/', function (req, res) {
    const lista = Controller.list();
    response.success(req, res, 'Todo correcto', 200);       
})

module.exports = router;