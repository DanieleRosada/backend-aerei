const queryController = require('./query');

module.exports = {
    insertData(airplane, callback) {
        let query = `INSERT INTO public.data("time", "position", altitude, id) VALUES ($1, $2, $3, $4) RETURNING *;`;
        let params = [airplane.timestamp, airplane.position, airplane.altitude, airplane.id];
        queryController.timescale(query, params, callback);
    },
    getData(id, callback) {
        let query = `SELECT * FROM public.data WHERE id = $1 ORDER BY "time"`;
        let params = [id];
        queryController.timescale(query, params, callback);
    },
    getLastData(callback) {
        let query = `SELECT * FROM public.data WHERE (id, "time") in (select id, max("time") from public.data group by id)`;
        let params = [];
        queryController.timescale(query, params, callback);
    }
}