'use strict';

var _Courier = require('./src/controllers/Courier');

var _Courier2 = _interopRequireDefault(_Courier);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// server.js
var app = (0, _express2.default)();

app.use(_express2.default.json());

app.post('/api/v1/Parcels', _Courier2.default.create);
app.get('/api/v1/Parcels', _Courier2.default.getAll);
app.get('/api/v1/Parcels/:id', _Courier2.default.getOne);
app.put('/api/v1/Parcels/:id', _Courier2.default.update);
app.delete('/api/v1/Parcels/:id', _Courier2.default.delete);
app.get('/api/v1/Users/:UserID', _Courier2.default.getUser);

app.listen(9000);
console.log('app running on port ', 9000);

module.exports = app;