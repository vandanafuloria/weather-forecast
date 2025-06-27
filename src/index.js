import "./styles.css";
import logo from "./assets/logo2.png";
import sunnyImg from "./assets/sunny.png";
import cloud from "./assets/cloud.png";
import rain from "./assets/rainy-day.png";
import strom from "./assets/stormy.png";
import snow from "./assets/snow.png";

const cityInput = document.querySelector("#search");

const loader = document.querySelector(".loader");

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
const cardEls = document.querySelectorAll(".card");
console.log(cardEls);
console.log(tempEl);

let today = new Date();
today = today.getDate();

/************************************************************ */

function setDataOnUi(data, error) {
  // city name update;
  const city = data.name;
  cityName.innerText = city;
  // country name update;
  tempEl.innerText = `${Math.ceil(data.main.temp)}℃`;

  countryName.innerText = data.sys.country;

  approxTempEl.innerText = `${Math.ceil(data.main.feels_like)}℃`;

  maxTemp.innerText = `  ${Math.ceil(data.main.temp_max)} ℃`;
  minTemp.innerText = `  ${Math.floor(data.main.temp_min)} ℃`;
  humidityEl.innerText = `${data.main.humidity}%`;
  const wind = data.wind.speed * 3.6;

  windEl.innerText = `${Math.trunc(wind)} kmph`;
  pressureEl.innerText = `${data.main.pressure} hPa`;

  weatherEl.innerText = data.weather[0].main;
  weatherDesc.innerText = data.weather[0].description;
  const iconImg = setIcons(data.weather[0].main);
  icon.src = iconImg;
}

/****************************************************************************************** */
async function getWeekWeatherData() {
  const city = cityInput.value;
  const key = "7132f1e93852b973f5fed30585286805";

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`
    );
    const week = await response.json();

    console.log(week);
    for (let el = 7; el < 40; el += 8) {
      console.log(el);
      const timestamp = week.list[el].dt;
      const date = new Date(timestamp * 1000); // to convert it into millisecond;

      switch (el) {
        case 7:
          const firstCard = cardEls[0].children;
          const addIcon = setIcons(week.list[el].weather[0].main);
          firstCard[0].src = addIcon;
          console.log(firstCard[0]);
          firstCard[1].textContent = `${week.list[el].main.temp}℃`;

          firstCard[2].textContent = week.list[el].weather[0].main;
          firstCard[3].textContent = week.list[el].weather[0].description;
          const substr1 = week.list[el].dt_txt.substring(0, 10);

          firstCard[4].textContent = substr1;
          break;

        case 15:
          const secCard = cardEls[1].children;
          const addIcon2 = setIcons(week.list[el].weather[0].main);
          secCard[0].src = addIcon2;

          secCard[1].textContent = `${week.list[el].main.temp}℃`;

          secCard[2].textContent = week.list[el].weather[0].main;
          secCard[3].textContent = week.list[el].weather[0].description;
          const substr2 = week.list[el].dt_txt.substring(0, 10);

          secCard[4].textContent = substr2;
          break;

        case 23:
          const thirdCard = cardEls[2].children;
          const addIcon3 = setIcons(week.list[el].weather[0].main);
          thirdCard[0].src = addIcon3;
          thirdCard[1].textContent = `${week.list[el].main.temp}℃`;

          thirdCard[2].textContent = week.list[el].weather[0].main;
          thirdCard[3].textContent = week.list[el].weather[0].description;
          const substr3 = week.list[el].dt_txt.substring(0, 10);

          thirdCard[4].textContent = substr3;
          break;

        case 31:
          const fourCard = cardEls[3].children;
          const addIcon4 = setIcons(week.list[el].weather[0].main);
          fourCard[0].src = addIcon4;
          fourCard[1].textContent = `${week.list[el].main.temp}℃`;

          fourCard[2].textContent = week.list[el].weather[0].main;
          fourCard[3].textContent = week.list[el].weather[0].description;
          const substr4 = week.list[el].dt_txt.substring(0, 10);

          fourCard[4].textContent = substr4;
          break;

        case 39:
          const fiveCard = cardEls[4].children;
          const addIcon5 = setIcons(week.list[el].weather[0].main);
          fiveCard[0].src = addIcon5;
          fiveCard[1].textContent = `${week.list[el].main.temp}℃`;

          fiveCard[2].textContent = week.list[el].weather[0].main;
          fiveCard[3].textContent = week.list[el].weather[0].description;
          const substr5 = week.list[el].dt_txt.substring(0, 10);

          fiveCard[4].textContent = substr5;
          break;
      }

      // all date
      // by spliting its giving an array of size 2;
      // [0] = date;
      // [1] = time  , i want date only;
    }
  } catch (err) {
    console.log(err);
  }

  // by this the required data is coming in json parsed format
}

/*************************************************************** */

async function fetchData() {
  const city = cityInput.value;
  const key = "7132f1e93852b973f5fed30585286805";

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
    );

    const data = await response.json();
    console.log({ data });
    if (data.cod == 404) {
      alert("LOcation not found");
      throw new Error("location not found");
    }
    setDataOnUi(data);
  } catch (err) {
    console.log(err);
  }

  // weather
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     setDataOnUi(data);
  //   })
  //   .catch((err) => {})

  //   .finally(() => {
  //     if (loader) loader.style.display = "none";
  //   });
}

function setIcons(type) {
  switch (type) {
    case "Clear":
      return sunnyImg;
    case "Clouds":
      return cloud;

    case "Rain":
      return rain;
    case "Thunderstorm":
      return strom;
    case "Snow":
      return snow;
    default:
      return sunnyImg;
  }
}

// getWeatherEl.addEventListener("click", fetchData);

// getWeatherEl.addEventListener("click", getWeekWeatherData);

getWeatherEl.addEventListener("click", fetchWeatherData);

/*************************************************** */
const mode = document.querySelector("#mode-select");
mode.addEventListener("change", function () {
  const main = document.querySelector(".main");

  const detailSection = document.querySelector(".weather-update-container");
  console.log(detailSection);
  if (mode.value == "dark") {
    main.style.backgroundColor = "";
    main.style.backgroundImage =
      "linear-gradient(23deg, rgb(60, 63, 65) 0%, rgb(16, 18, 21) 100%)";
    detailSection.style.backgroundImage =
      "linear-gradient(253deg, rgba(22, 34, 42, 1) 0%, rgba(58, 96, 115, 1) 100%)";

    cardEls.forEach((card) => {
      card.style.backgroundImage =
        "linear-gradient(253deg, rgba(22, 34, 42, 1) 0%, rgba(58, 96, 115, 1) 100%)";
      card.style.border = "none";
    });
  } else {
    main.style.backgroundColor = "";
    main.style.backgroundImage =
      "linear-gradient(50deg, rgba(55, 59, 68, 1) 0%, rgba(66, 134, 244, 1) 100%)";
    detailSection.style.backgroundImage = "";
    cardEls.forEach((card) => {
      card.style.backgroundImage = "";
      card.style.border = "";
    });
  }
});

/************************************************** */

const dateEl = document.getElementById("date");
const timeEl = document.getElementById("time");
console.log(timeEl);

document.addEventListener("DOMContentLoaded", () => {
  cityInput.value = "delhi";
  fetchWeatherData();

  const d = new Date();
  dateEl.innerText = d.toLocaleDateString();

  setInterval(() => {
    timeUpdate();
  }, 1000);
});

/****************************************************** */

function timeUpdate() {
  const t = new Date();
  const options = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // 👈 this is the key!
  };

  const formattedTime = t.toLocaleTimeString("en-US", options);
  // console.log(formattedTime); // e.g. "4:36:12 PM"
  timeEl.textContent = formattedTime;
}

function showLoader() {
  loader.classList.remove("hide");
}

function hideLoader() {
  loader.classList.add("hide");
}

function fetchWeatherData() {
  console.log("Showing loader");
  showLoader();
  fetchData()
    .then(() => getWeekWeatherData())
    .then(() => {
      console.log("Hiding laoder");
      hideLoader();
    })
    .catch(() => console.log("Something went wrong"));
}
