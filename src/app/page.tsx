import { CurrentConditions } from "@/components/CurrentConditions";
import { DailyForecast } from "@/components/DailyForecast/DailyForecast";
import { Header } from "@/components/Header";
import { HourlyForecast } from "@/components/HourlyForecast";
import { LocationSearchBar } from "@/components/LocationSearchBar";
import { TodayOverview } from "@/components/TodayOverview";
import { GEO_HEADERS } from "@/constants";
import { getWeatherData } from "@/services/weather";
import { headers } from "next/headers";

export default async function Home() {
  const nextHeaders = await headers();
  const country =
    nextHeaders.get(GEO_HEADERS.country) || process.env.COUNTRY || "";
  const city = nextHeaders.get(GEO_HEADERS.city) || process.env.CITY || "";
  const latitude =
    nextHeaders.get(GEO_HEADERS.latitude) || process.env.LATITUDE || "";
  const longitude =
    nextHeaders.get(GEO_HEADERS.longitude) || process.env.LONGITUDE || "";

  const weatherData = await getWeatherData(latitude, longitude);
  console.log(weatherData);

  if (!weatherData) {
    return <>Error</>;
  }

  return (
    <div>
      <Header />
      <h1>How’s the sky looking today?</h1>
      <div>
        <p>Latitude: {latitude}</p>
        <p>Longitude: {longitude}</p>
      </div>
      <LocationSearchBar />
      <main>
        <div>
          <TodayOverview
            city={city}
            country={country}
            temperature={weatherData.current.temperature_2m}
            temperatureUnit={weatherData.current_units.temperature_2m}
            weatherCode={weatherData.current.weather_code}
          />
          <CurrentConditions />
          <DailyForecast />
        </div>
        <HourlyForecast />
      </main>
    </div>
  );
}
