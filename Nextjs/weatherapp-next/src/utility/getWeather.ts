export default async function getWeather(lat: string, lon: string) {
  const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=912af0f7d9b6b242869ebd84732b8cd9`;

  const res = await fetch(api);

  if (!res.ok) throw new Error("Error fetching");

  return res.json();
}
