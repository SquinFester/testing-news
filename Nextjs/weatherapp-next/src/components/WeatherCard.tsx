import getWeather from "@/utility/getWeather";
import { useState, useEffect } from "react";

const WeatherCard = ({ lat, lon }: { lat: string; lon: string }) => {
  const [weatherInfo, setWeatherInfo] = useState({});

  const getSpecificWeather = async () => {
    const res = await getWeather(lat, lon);
    const data: Weather = await res;

    setWeatherInfo(() => data);
  };

  useEffect(() => {
    getSpecificWeather();
  }, [lat, lon]);

  return (
    <div>
      {lat}, {lon}
      <p>{JSON.stringify(weatherInfo)}</p>
    </div>
  );
};
export default WeatherCard;
