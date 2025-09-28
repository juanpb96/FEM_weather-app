"use client";

interface TodayOverviewProps {
  city: string;
  country: string;
}

function success(pos: GeolocationPosition) {
  const { latitude, longitude } = pos.coords;
  console.log(latitude, longitude);
}

function error(err: GeolocationPositionError) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

export function TodayOverview({ city, country }: TodayOverviewProps) {
  function getPreciseLocation() {
    navigator.geolocation.getCurrentPosition(success, error);
  }

  return (
    <div>
      <div>
        <p>
          {city}, {country}
        </p>
        <p>
          Not your location?{" "}
          <button onClick={getPreciseLocation}>Provide precise location</button>
        </p>
        <p>Tuesday, Aug 5, 2025</p>
      </div>
      <p>20°</p>
    </div>
  );
}
