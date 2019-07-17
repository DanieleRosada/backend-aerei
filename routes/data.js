const router = require('express').Router();
const dataController = require('../controllers/data');
const rabbit = require('../structure/rabbit');

router.get('/', function (req, res) {
    dataController.getLastData(function(err, rows){
        if(err) res.send(err);
        res.send(rows);
    });
});

router.post('/queue', function (req, res) {
    let payload = req.body.payload;
    rabbit.sendToQueue('dataQueue', payload);
    res.end();
});

module.exports = router;