export default async function getCoordinates(city: string = "") {
  const api = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=912af0f7d9b6b242869ebd84732b8cd9`;

  //   const api = `https://jsonplaceholder.typicode.com/posts/${city}`;

  const res = await fetch(api);

  if (!res.ok) throw new Error("Error fetching");

  return res.json();
}
