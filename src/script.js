let now = new Date();
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let minute = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "06",
  "07",
  "08",
  "09",
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59,
];
console.log(date);
let day = days[now.getDay()];
let second = minute[now.getMinutes()];
let h1 = document.querySelector("h1");
h1.innerHTML = `${day} the ${date}, ${hours}:${second}`;

//

//function search(event) {
// event.preventDefault();
// let inputCity = document.querySelector("#cityName");
// let inputCityValue = inputCity.value;
// let apiKey = "d3592968d288237ab5de304e493c66f3";
// let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCityValue}&appid=${apiKey}&units=imperial`;
// axios.get(apiUrl).then(showWeather);
//}
//let form = document.querySelector("#city");
//form.addEventListener("submit", search);

//

//function showWeather(response) {
//let h2 = document.querySelector("h2");
// let temperature = Math.round(response.data.main.temp);
//let city = response.data.name;
//h2.innerHTML = `It is currently ${temperature}° in ${city}!`;
//}

//

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#currentCity");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
}
let apiKey = "d3592968d288237ab5de304e493c66f3";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Chattanooga&appid=${apiKey}&units=imperial`;
axios.get(apiUrl).then(displayTemperature);
