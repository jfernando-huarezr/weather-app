import { WEATHER_API_KEY } from "./keys";
import { drawWeather } from "./dom";
import getBackgroundGif from "./background";

export default async function getCurrentWeather(city) {
  if (!city) return;
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}`,
      {
        mode: "cors",
      }
    );

    const data = await response.json();
    console.log(data);
    const desiredInfo = {
      name: data.location.name,
      country: data.location.country,
      temp_c: data.current.temp_c,
      temp_f: data.current.temp_f,
      text: data.current.condition.text,
      icon: data.current.condition.icon,
    };

    getBackgroundGif(desiredInfo.text);

    // drawWeather(desiredInfo);
  } catch (error) {
    console.log(error);
  }
}
