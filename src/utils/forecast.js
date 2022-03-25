const request = require('request')
//forecast se esta llamando en get weather en app.js de src
const forecast = (address, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=7c00e745a9c655067bb52f3ceff98445&query=" + address;
   // const url = 'https://api.darksky.net/forecast/7c00e745a9c655067bb52f3ceff98445/' + latitude + ',' + longitude

    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            //esto es lo que devuelve la temperatura

            //hora, temp, humedad "weather_descriptions"
            callback(undefined, "In " + response.body.location.name[0]+  " the day is "+ response.body.current.weather_descriptions[0] + " and the temperature is " + response.body.current.temperature[0] + " and the humidity is " + response.body.current.humidity[0] )
        }
    })
}

module.exports = forecast