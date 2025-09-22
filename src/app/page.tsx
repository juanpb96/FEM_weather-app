import { CurrentConditions } from "@/components/CurrentConditions";
import { DailyForecast } from "@/components/DailyForecast/DailyForecast";
import { Header } from "@/components/Header";
import { HourlyForecast } from "@/components/HourlyForecast";
import { LocationSearchBar } from "@/components/LocationSearchBar";
import { TodayOverview } from "@/components/TodayOverview";

export default function Home() {
  return (
    <div>
      <Header />
      <h1>How’s the sky looking today?</h1>
      <LocationSearchBar />
      <main>
        <div>
          <TodayOverview />
          <CurrentConditions />
          <DailyForecast />
        </div>
        <HourlyForecast />
      </main>
    </div>
  );
}
