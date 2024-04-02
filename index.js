function setWeatherInfo(weatherInfo) {
    const weatherInfoDiv = document.getElementById('weather-info')

    weatherInfoDiv.innerHTML = `
        <h2>Weather in ${weatherInfo.city}</h2>
        <p>Temperature: ${weatherInfo.temperature}°C</p>
        <p>Weather: ${weatherInfo.description}</p>
        <p>Humidity: ${weatherInfo.humidity}%</p>
        <p>Wind Speed: ${weatherInfo.windSpeed} m/s</p>
    `
}

const cityInput = document.getElementById('city-input')
const getWeatherButton = document.getElementById('get-weather-btn')

getWeatherButton.addEventListener('click', () => {
    const data = getWeatherSync(cityInput.value)
    setWeatherInfo(data)
})