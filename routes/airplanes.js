const router = require('express').Router();
const airplanesController = require('../controllers/airplanes');

router.get('/', function (req, res){
    airplanesController.getAirplanes(function(err, rows){
        if(err) res.send(err);
        res.send(rows);
    });
});

module.exports = router;