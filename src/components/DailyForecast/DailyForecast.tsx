import { DayForecastCard } from "./DayForecastCard";

export function DailyForecast() {
  return (
    <article>
      <h2>DailyForecast</h2>
      <div>
        {Array(7)
          .fill(null)
          .map((_, index) => (
            <DayForecastCard key={index} />
          ))}
      </div>
    </article>
  );
}
