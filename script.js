async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'YOUR_API_KEY';  // Replace with your API key from OpenWeatherMap
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === '404') {
            alert('City not found');
        } else {
            const location = `${data.name}, ${data.sys.country}`;
            const temperature = `${data.main.temp}°C`;
            const description = data.weather[0].description;
            const humidity = `Humidity: ${data.main.humidity}%`;

            document.getElementById('location').innerText = location;
            document.getElementById('temperature').innerText = temperature;
            document.getElementById('description').innerText = description;
            document.getElementById('humidity').innerText = humidity;
        }
    } catch (error) {
        alert('Error fetching weather data');
    }
}
