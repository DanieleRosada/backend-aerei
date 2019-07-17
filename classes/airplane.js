module.exports = class Airplane {

    constructor(airplaneCode) {
        this.AirplaneCode = airplaneCode;
        this.Latlng = [45.3019, 12.2107];
    }

    randomCoordinate(radius) {
        let y0 = +this.Latlng[0];
        let x0 = +this.Latlng[1];
        let rd = radius / 111300;

        let u = Math.random();
        let v = Math.random();

        let w = rd * Math.sqrt(u);
        let t = 2 * Math.PI * v;
        let x = w * Math.cos(t);
        let y = w * Math.sin(t);

        let newlat = y + y0;
        let newlon = x + x0;

        return [newlat.toFixed(6), newlon.toFixed(6)];
    }

    randomAltitude() {
        return Math.floor(Math.random() * 12000);
    }

    payload() {
        let data = {
            timestamp: new Date(),
            id: this.AirplaneCode,
            position: this.randomCoordinate(10000),
            altitude: this.randomAltitude()
        };

        return data;
    }

    positionEvent() {
        return this.payload();
    }

    alertEvent() {
        let data = this.payload();
        if (data.altitude < 3000 || data.altitude > 10000) return data;

        return null;
    }
}