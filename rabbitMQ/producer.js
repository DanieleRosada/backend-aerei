const Airplane = require("../classes/airplane");
const airplaneController = require("../controllers/airplanes");
const axios = require('axios');

var LastAirplanes = [];
var Airplanes = [];

inizializate();
setInterval(inizializate, 60000);
setInterval(position, 5000);
setInterval(alert, 7000);

function inizializate() {
    airplaneController.getAirplanes((err, listAirplanes) => {
        if (err) throw err;

        if (Airplanes.length == 0 || LastAirplanes != listAirplanes) {
            LastAirplanes = listAirplanes;
            Airplanes = [];


            listAirplanes.forEach(a => {
                Airplanes.push(new Airplane(a.id));
            });
        }
    });
}


function position() {
    Airplanes.forEach((a) => {
        sendState(a.positionEvent());
    });
}

function alert() {
    Airplanes.forEach((a) => {
        sendState(a.alertEvent());
    });
}

function sendState(payload) {
    if (payload)
        axios.post('http://127.0.0.1:3000/data/queue', {
            payload: payload,
        })
        .catch(function (error) {
            throw error;
        });
}
