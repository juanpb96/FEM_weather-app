export const BASE_PATH = process.env.WEATHER_APP_PATH || "";

const HEADER_PREFIX = "geo";

export const GEO_HEADERS = {
  country: `${HEADER_PREFIX}-country`,
  city: `${HEADER_PREFIX}-city`,
  latitude: `${HEADER_PREFIX}-latitude`,
  longitude: `${HEADER_PREFIX}-longitude`,
} as const;
