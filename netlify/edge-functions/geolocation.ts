import { GEO_HEADERS } from "./utils/constants.ts";
import type { Config, Context } from "@netlify/edge-functions";

type Geo = Context["geo"];
type RequestHeaders = Pick<Request, "headers">;

function getGeoHeaderValue({ headers }: RequestHeaders): Geo | null {
  const geo = headers.get("x-geo-context");

  if (geo === null) {
    return null;
  }

  try {
    return JSON.parse(geo);
  } catch (error) {
    console.error("The header contained an invalid JSON.", error);
    return null;
  }
}

export default async function handler(request: Request, context: Context) {
  const geoContextHeader = getGeoHeaderValue(request);

  const { country, city, latitude, longitude } =
    geoContextHeader ?? context.geo;

  request.headers.set(GEO_HEADERS.country, country?.name ?? "");
  request.headers.set(GEO_HEADERS.city, city ?? "");
  request.headers.set(GEO_HEADERS.latitude, String(latitude ?? 0));
  request.headers.set(GEO_HEADERS.longitude, String(longitude ?? 0));
}

export const config: Config = {
  path: "/FEM_weather-app",
};
