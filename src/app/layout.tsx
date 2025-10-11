import type { Metadata } from "next";
import { DM_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { BASE_PATH } from "@/constants";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  style: ["normal", "italic"],
  subsets: ["latin"],
  weight: "variable",
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

// TODO: Add OG properties in metadata after page content and styles are completed - Issue #12
export const metadata: Metadata = {
  title: "Weather Now - Live Weather & Forecasts",
  description:
    "Get real-time weather updates and a 7-day forecast for any location. This app provides hourly forecasts, temperature, wind speed, humidity, and precipitation values. Perfect for planning your day or week ahead.",
  keywords:
    "weather, forecast, hourly, daily, temperature, wind speed, humidity, precipitation, metric, imperial, celsius, fahrenheit, weather app",
  authors: [{ name: "Juan Bonilla", url: "juanbonilla.me" }],
  icons: `${BASE_PATH}/favicon.ico`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${bricolageGrotesque.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
