# Overview

You have access to two functions:

- `getWeatherSync(city)` which performs a lengthy loop before returning weather data. This function is _blocking_.
- `getWeatherAsync(city)` which returns a promise, eventually resolving to return the weather data. This function is _not blocking_.

## Your task

- Open `index.html` with LiveServer
- Enter a city name into the input, then click the button and witness how the app freezes while the logic runs
- Replace the synchronous function call in `index.js` with an asynchronous function call