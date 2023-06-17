import { WEATHER_KEY } from "../../api-key";

export default async function getWeather(lat: string, lon: string) {
  const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_KEY}`;

  const res = await fetch(api);

  if (!res.ok) throw new Error("Error fetching");

  return res.json();
}
