import "./styles.css";

const cityInput = document.querySelector("#search");

const getWeatherEl = document.getElementById("get-weather");

const cityName = document.getElementById("city");
const countryName = document.getElementById("country");
const tempEl = document.getElementById("temp");
const approxTempEl = document.getElementById("approx-temp");

const maxTemp = document.getElementById("max");
const minTemp = document.getElementById("min");
const humidityEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");
const pressureEl = document.getElementById("pressure");
const weatherEl = document.getElementById("weather");
const weatherDesc = document.getElementById("desc");
const icon = document.querySelector(".weather-icon");
console.log(tempEl);

function setDataOnUi(data) {
  // city name update;
  const city = data.name;
  cityName.innerText = city;
  // country name update;
  tempEl.innerText = `${Math.ceil(data.main.temp)}℃`;

  countryName.innerText = data.sys.country;

  approxTempEl.innerText = `${Math.ceil(data.main.feels_like)}℃`;

  maxTemp.innerText = `${Math.ceil(data.main.temp_max)}℃`;
  minTemp.innerText = `${Math.floor(data.main.temp_min)}℃`;
  humidityEl.innerText = `${data.main.humidity}%`;
  const wind = data.wind.speed * 3.6;

  windEl.innerText = `${Math.trunc(wind)} kmph`;
  pressureEl.innerText = `${data.main.pressure} hPa`;

  weatherEl.innerText = data.weather[0].main;
  weatherDesc.innerText = data.weather[0].description;
  const iconCode = data.weather[0].icon;
  const iconUrl = "https://openweathermap.org/img/w/" + iconCode + ".png";
  icon.src = iconUrl;
}

function fetchData() {
  const city = cityInput.value;
  const key = "7132f1e93852b973f5fed30585286805";

  const test = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
  );
  test
    .then((response) => {
      console.log("get the daata");
      return response.json();
    })
    .then((data) => {
      console.log(data);
      setDataOnUi(data);
    })
    .catch((err) => {
      console.log("OOps somthig wrnt wrong");
    });
}

getWeatherEl.addEventListener("click", fetchData);

console.log(obj);
