function getWeatherSync(city) {
    if (!city) {
        throw 'Must provide a city name'
    }

    let i = 0
    while (i < 150000) {
        for (let j = 0; j < i; j++) {}
        i++
    }

    return {
        city,
        temperature: Math.floor(Math.random() * (39 - 1) + 1),
        description: "Partly cloudy",
        humidity: Math.floor(Math.random() * (99 - 1) + 1),
        windSpeed: Math.floor(Math.random() * (20 - 1) + 1)
    }
}

function getWeatherAsync(city) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!city) {
                reject('Must provide a city name')
            }

            resolve({
                city,
                temperature: Math.floor(Math.random() * (39 - 1) + 1),
                description: "Partly cloudy",
                humidity: Math.floor(Math.random() * (99 - 1) + 1),
                windSpeed: Math.floor(Math.random() * (20 - 1) + 1)
            })
        }, 3000)
    })
}