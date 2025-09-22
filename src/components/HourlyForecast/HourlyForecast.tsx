import { DaySelector } from "./DaySelector";
import { HourForecastCard } from "./HourForecastCard";

export function HourlyForecast() {
  return (
    <article>
      <div>
        <h2>HourlyForecast</h2>
        <DaySelector />
      </div>
      <div>
        {Array(24)
          .fill(null)
          .map((_, index) => (
            <HourForecastCard key={index} />
          ))}
      </div>
    </article>
  );
}
