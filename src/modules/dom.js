import waitingIcon from "../img/waiting.gif";

const main = document.querySelector("main");

export function drawWeather(info) {
  const content = main.querySelector(".content");
}

export function drawBackground(imageSrc) {
  main.style.backgroundImage = `url('${imageSrc}')`;
  main.style.backgroundSize = "cover";
  main.style.backgroundRepeat = "no-repeat";
}

export function drawWaiting() {}
