import React from "react";
import Image, { ImageProps } from "next/image";
import { BASE_PATH } from "@/constants";
import { WMO_CODE_ICON_MAP } from "./codes";

interface WeatherIconProps extends Omit<ImageProps, "src" | "alt"> {
  weatherCode: number;
}

type WMOCode = keyof typeof WMO_CODE_ICON_MAP;

export function WeatherIcon({ weatherCode, ...imageProps }: WeatherIconProps) {
  if (!(weatherCode in WMO_CODE_ICON_MAP)) {
    throw new Error(`Invalid weather code received: ${weatherCode}`);
  }

  const { src, alt } = WMO_CODE_ICON_MAP[weatherCode as WMOCode];

  return (
    <Image
      {...imageProps}
      src={`${BASE_PATH}/weather-icons/${src}`}
      alt={alt}
    />
  );
}
