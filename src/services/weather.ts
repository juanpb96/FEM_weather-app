import { WEATHER_API_DEFAULT_PARAMS, WEATHER_API_URL } from "@/constants";
import { WeatherData } from "@/types";

export async function getWeatherData(
  latitude: string,
  longitude: string
): Promise<WeatherData | undefined> {
  try {
    const weatherApiUrl = `${WEATHER_API_URL}?latitude=${latitude}&longitude=${longitude}&${WEATHER_API_DEFAULT_PARAMS}`;

    const weatherResponse = await fetch(weatherApiUrl);
    const weatherData = await weatherResponse.json();

    return weatherData;
  } catch (error) {
    console.error(error);
  }
}
