export const BASE_PATH = "/FEM_weather-app";

const HEADER_PREFIX = "geo";

export const GEO_HEADERS = {
  country: `${HEADER_PREFIX}-country`,
  city: `${HEADER_PREFIX}-city`,
  latitude: `${HEADER_PREFIX}-latitude`,
  longitude: `${HEADER_PREFIX}-longitude`,
} as const;

export const WEATHER_UNITS = {
  precipitation: {
    inch: "inch",
    millimeter: "mm",
  },
  temperature: {
    celsius: "celsius",
    fahrenheit: "fahrenheit",
  },
  windSpeed: {
    kmh: "kmh",
    mph: "mph",
  },
};

export const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast";
export const WEATHER_API_DEFAULT_PARAMS = `daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,weather_code,apparent_temperature,relative_humidity_2m,precipitation,wind_speed_10m&wind_speed_unit=${WEATHER_UNITS.windSpeed.kmh}&temperature_unit=${WEATHER_UNITS.temperature.celsius}&precipitation_unit=${WEATHER_UNITS.precipitation.millimeter}`;
