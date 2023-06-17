import { WEATHER_KEY } from "../../api-key";

export default async function getCoordinates(city: string = "") {
  const api = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${WEATHER_KEY}`;

  //   const api = `https://jsonplaceholder.typicode.com/posts/${city}`;

  const res = await fetch(api);

  if (!res.ok) throw new Error("Error fetching");

  return res.json();
}

export const getCitiesByCoord = async (lat: string, lon: string) => {
  const api = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${WEATHER_KEY}`;

  const res = await fetch(api);
  if (!res.ok) throw new Error("Error fetching");

  return res.json();
};
