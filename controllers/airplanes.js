const queryController = require('./query');

module.exports = {
    getAirplanes(callback) {
        let query = `SELECT * FROM public.airplanes`;
        let params = [];
        queryController.postgres(query, params, callback);
    },
}