const socket = require('../config/socket');
var io = require('socket.io').listen(socket.port);
const rabbit = require('../structure/rabbit');

io.on('connection', (socket) => {});

rabbit.reciveToQueue('sendQueue', function (position) {
  io.emit("data", position);
});