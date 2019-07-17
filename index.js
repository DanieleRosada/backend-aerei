const producerRMQ = require('./rabbitMQ/producer');
const consumerRMQ = require('./rabbitMQ/consumer');
const socketIO = require('./socketIO/socket');

const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors())
app.use(bodyParser.json());

app.use('/airplanes', require('./routes/airplanes'));
app.use('/data', require('./routes/data'));

app.listen(3000);