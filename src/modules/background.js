import { drawBackground } from "./dom";
import { GIF_API_KEY } from "./keys";

export default async function getBackgroundGif(gifText) {
  console.log(gifText);
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=${GIF_API_KEY}&s=${gifText} sky weather background`,
      {
        mode: "cors",
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP Status: ${response.status}`);
    }

    const body = await response.json();
    if (!body.data) {
      throw new Error(`No gif for searched word`);
    }

    const imgSrc = body.data.images.original.url;
    drawBackground(imgSrc);
  } catch (error) {
    console.log(error);
  }
}
