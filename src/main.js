import getCurrentWeather from "./modules/getWeather";
import "./style/style.scss";

const header = document.querySelector("header");

// search box
const input = document.createElement("input");
const div = document.createElement("div");
const buttonSearch = document.createElement("button");
buttonSearch.textContent = "Search";
div.appendChild(input);
div.appendChild(buttonSearch);

header.appendChild(div);

buttonSearch.addEventListener("click", () => {
  const city = input.value;
  getCurrentWeather(city);
});
