const express = require('express');

const response = require('../../../network/response');
const controller = require('./index');
//const controller = require('./controller');

const router = express.Router(); // el router es un objeto que nos permite manejar las rutas de nuestra aplicación, es como un mini servidor dentro de nuestro servidor principal, nos permite manejar las rutas de una manera más organizada y modularizada, cada vez que se haga una petición a /api/user, se va a ejecutar el router que se encuentra en ./components/user/network.js

router.get('/', function (req, res) {
    controller.list()
        .then((lista) => {
            response.success(req, res, lista, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });    
});

router.get('/:id', function (req, res) {
    controller.get(req.params.id)
        .then((user) => {
            response.success(req, res, user, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
    
});

module.exports = router;

/*
router.get('/', function (req, res) {
    const lista = controller.list();
    response.success(req, res, lista, 200);       
})
*/