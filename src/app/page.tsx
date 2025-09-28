import { CurrentConditions } from "@/components/CurrentConditions";
import { DailyForecast } from "@/components/DailyForecast/DailyForecast";
import { Header } from "@/components/Header";
import { HourlyForecast } from "@/components/HourlyForecast";
import { LocationSearchBar } from "@/components/LocationSearchBar";
import { TodayOverview } from "@/components/TodayOverview";
import { GEO_HEADERS } from "@/constants";
import { headers } from "next/headers";

export default async function Home() {
  const nextHeaders = await headers();
  const country = nextHeaders.get(GEO_HEADERS.country) || "";
  const city = nextHeaders.get(GEO_HEADERS.city) || "";
  const latitude = nextHeaders.get(GEO_HEADERS.latitude);
  const longitude = nextHeaders.get(GEO_HEADERS.longitude);

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
          <TodayOverview city={city} country={country} />
          <CurrentConditions />
          <DailyForecast />
        </div>
        <HourlyForecast />
      </main>
    </div>
  );
}
