// Создаём глобальные переменные
let city;
let apiKey = "2ae2adfffc8ebc37abd62fe2b222ef39";

// Создаём переменные для привязки к необходимым объектам на странице
const CITY_INPUT = document.getElementById("city-input");
const WEATHER_CONTAINER = document.getElementById("weather-container");
const CITY_NAME = document.getElementById("city-name");
const WEATHER_ICON = document.getElementById("weather-icon");
const WEATHER_DESCRIPTION = document.getElementById("weather-description");
const TEMP_CURRENT = document.getElementById("temp-current");
const TEMP_FEELS_LIKE = document.getElementById("temp-feels-like");
const SPINNER = document.getElementById("spinner");
const ERROR = document.getElementById("error");
const BUTTON = document.getElementById("download-button");

// Функция для получения погоды
const getWeather = async () => {

  // Прекращаем выполнение функции, если поле ввода не заполнено
  if (CITY_INPUT.value.trim() === "") {
    alert("Enter the name of the city!");
    return;
  }

  city = CITY_INPUT.value.trim().toLowerCase();
  const WEATHER_CALL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  SPINNER.style.display = "flex";
  WEATHER_CONTAINER.style.display = "none";
  ERROR.style.display = "none";
  BUTTON.disabled = true;

  try {
    const response = await fetch(WEATHER_CALL);
    console.log(response);
    const result = await response.json();
    console.log(result);

    if (response.ok) {
      SPINNER.style.display = "none";
      ERROR.style.display = "none";
      WEATHER_CONTAINER.style.display = "flex";
      BUTTON.disabled = false;
      
      CITY_NAME.textContent = result.name;
      TEMP_CURRENT.textContent = `${result.main.temp}°`;
      WEATHER_ICON.src = `http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`;
      WEATHER_DESCRIPTION.textContent = result.weather[0].description;      
      TEMP_FEELS_LIKE.textContent = `(feels like ${result.main.feels_like}°)`;

    } else {
      throw new Error(`#${result.cod}: ${result.message}`);
    }

  } catch (error) {
    console.log(error);
    WEATHER_CONTAINER.style.display = "none";
    SPINNER.style.display = "none";
    ERROR.style.display = "flex";
    ERROR.textContent = `Error ${error.message}`;

  } finally {
    BUTTON.disabled = false;
  }
};

// Подключаем к кнопке прослушивание событий с привязкой к функции
BUTTON.addEventListener("click", getWeather);