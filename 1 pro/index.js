const getWeatherButton = document.getElementById("get-weather-btn");
const cityNameinput = document.getElementById("city-name-input");
const weatherDescriptionContainer = document.getElementById(
  "weather-description"
);
const weatherIconContainer = document.getElementById("weather-icon");
const temperatureContainer = document.getElementById("temperature");
const windSpeedContainer = document.getElementById("wind-speed");

const apiKey = "c88c1f2b6686756664ac363069452c29";

async function getCurrentWeather(city) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    }
    throw new Error(
      `Request failed with status ${respone.status}: ${respone.statusText}`
    );
  } catch (error) {
    console.error(error);
  }
}
function extractWeatherData(respone) {
  const temperature = respone.main.temp;
  const weatherDescription = respone.weather[0].description;
  const weatherIcon = respone.weather[0].icon;
  const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherIcon}.png`;
  const windSpeed = respone.wind.speed;
  return {
    temperature,
    weatherDescription,
    weatherIconUrl,
    windSpeed,
  };
}

function displayWeather(weatherData) {
  const { temperature, weatherDescription, weatherIconUrl, windSpeed } =
    weatherData;
  weatherDescriptionContainer.textContent = "Weather: " + weatherDescription;
  weatherIconContainer.src = weatherIconUrl;
  temperatureContainer.textContent = "Temperature: " + temperature;
  windSpeedContainer.textContent = "Wind speed: " + windSpeed;
}

getWeatherButton.addEventListener("click", async (ev) => {
  ev.preventDefault();
  const city = cityNameinput.value;
  if (!city) return alert("Please enter a city name");
  const respone = await getCurrentWeather(city);
  const weatherData = extractWeatherData(respone);
  displayWeather(weatherData);
  cityNameInput.value = "";
});
