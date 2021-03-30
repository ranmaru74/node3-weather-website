const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicmFubWFydTc0IiwiYSI6ImNrbXJlcGw5aTA3OTgycHBnbmdoOXZ3NDEifQ.GPvNBwlx2PEC1Cne5wyLBw&limit=1'
    console.log('geocode', url)
    request({ url, json: true }, (error, { body: responseData } = {}) => {
        if (error) {
            callback('Unable to connect to geocode services!', undefined)
        } else if (responseData.features.length === 0) {
            callback('Unable to find locations', undefined)
        } else {
            const latitude = responseData.features[0].center[1]
            const longitude = responseData.features[0].center[0]
            const location = responseData.features[0].place_name
            callback(undefined, {
                latitude,
                longitude,
                location
            })
        }
    })
}

module.exports = geocode
