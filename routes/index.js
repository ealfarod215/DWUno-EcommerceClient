'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('iniciosesion', { title: 'Inicio De Sesion' });
});

router.get('/ConfirmacionPedido', function (req, res, next) {
    res.render('ConfirmacionPedido', { title: 'Confirmacion De Pedido' });
});

router.get('/DetalleProductos', function (req, res, next) {
    res.render('DetalleProductos', { title: 'Detalle de los Productos' });
});

router.get('/ECommerceFood', function (req, res, next) {
    res.render('ECommerceFood', { title: 'ECommerce Food' });
});

router.get('/FormaDePagoCheque', function (req, res, next) {
    res.render('FormaDePagoCheque', { title: 'Forma De Pago Cheque' });
});

router.get('/FormaDePagoTarjeta', function (req, res, next) {
    res.render('FormaDePagoTarjeta', { title: 'Forma De Pago Tarjeta' });
});

router.get('/FormasDePago', function (req, res, next) {
    res.render('FormasDePago', { title: 'Formas De Pago' });
});

router.get('/InformacionCliente', function (req, res, next) {
    res.render('InformacionCliente', { title: 'Informacion del Cliente' });
});



module.exports = router;
