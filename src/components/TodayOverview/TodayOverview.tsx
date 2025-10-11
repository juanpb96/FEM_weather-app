"use client";

import { WeatherIcon } from "../WeatherIcon";

interface TodayOverviewProps {
  city: string;
  country: string;
  temperature: number;
  temperatureUnit: string;
  weatherCode: number;
}

function success(pos: GeolocationPosition) {
  const { latitude, longitude } = pos.coords;
  console.log(latitude, longitude);
}

function error(err: GeolocationPositionError) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

const options: Intl.DateTimeFormatOptions = {
  weekday: "long",
  month: "short",
  day: "numeric",
  year: "numeric",
};

const accessibilityOptions: Intl.DateTimeFormatOptions = {
  ...options,
  month: "long",
};

export function TodayOverview({
  city,
  country,
  temperature,
  temperatureUnit,
  weatherCode,
}: TodayOverviewProps) {
  const today = new Date();
  const temperatureRounded = Math.round(temperature);

  function getPreciseLocation() {
    navigator.geolocation.getCurrentPosition(success, error);
  }

  return (
    <section
      aria-label="Today's Overview"
      className={`bg-[url(/FEM_weather-app/bg-today-small.svg)] sm:bg-[url(/FEM_weather-app/bg-today-large.svg)] bg-no-repeat bg-cover bg-center min-h-[286px] rounded-[20px] text-center sm:text-left flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 px-[24.5px] sm:px-[24px] py-[40px]`}
    >
      <div className="flex-1">
        <p className="text-preset-4 wrap-anywhere">
          {city}, {country}
        </p>

        {/* TODO: Display when working on Issue #17 */}
        <p className="hidden">
          Not your location?{" "}
          <button onClick={getPreciseLocation}>Provide precise location</button>
        </p>

        <p className="text-preset-6 opacity-80 mt-3">
          <span aria-hidden="true">
            {today.toLocaleDateString("en-US", options)}
          </span>
          <span className="sr-only">
            {today.toLocaleDateString("en-US", accessibilityOptions)}
          </span>
        </p>
      </div>
      <div className="flex items-center gap-5 max-w-max">
        <WeatherIcon
          weatherCode={weatherCode}
          width={120}
          height={120}
          priority
        />
        <p className="text-preset-1">
          <span aria-hidden="true">{temperatureRounded}°</span>
          <span className="sr-only">{`${temperatureRounded}${temperatureUnit}`}</span>
        </p>
      </div>
    </section>
  );
}
