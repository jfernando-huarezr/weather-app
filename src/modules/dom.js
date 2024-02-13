import waitingIcon from "../img/waiting.gif";

const main = document.querySelector("main");
const content = main.querySelector(".content");

function cleanMain() {
  content.innerHTML = "";
}

export function drawWeather(info) {
  cleanMain();
  content.innerHTML = `
    <div class="icon"><img src="${info.icon}" alt="icon"></div>
    <div class="city">${info.name}</div>
    <div class="country">${info.country}</div>
    <div class="temperature">
      <div class="celsius">${info.temp_c} °C</div>
      <div>|</div>
      <div class="farenheit">${info.temp_f} °F</div>
    </div>
    <div class="condition">${info.text}</div>
  `;
}

export function drawBackground(imageSrc) {
  main.style.backgroundImage = `url('${imageSrc}')`;
  main.style.backgroundSize = "cover";
  main.style.backgroundRepeat = "no-repeat";
}

export function drawWaiting() {
  cleanMain();
  content.innerHTML = `
    <div class="icon"><img src="${waitingIcon}" alt="icon"></div>
  `;
}
