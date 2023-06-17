"use client";

import WeatherCard from "@/components/WeatherCard";
import getCoordinates, { getCitiesByCoord } from "@/utility/getCoordinates";
import { log } from "console";
import { FormEvent, useState, useEffect, Suspense } from "react";

type Cord = {
  lat: string;
  lon: string;
};

export default function Home() {
  const [cityInputed, setCityInputed] = useState<string>("");
  const [cityCords, setCityCords] = useState<Cord>({ lat: "", lon: "" });

  const getSpecificCord = async (place: string) => {
    const res = getCoordinates(place);

    const data: Coords[] = await res;
    console.log(data);

    if (data.length === 0) {
      setCityCords(() => ({ lat: "", lon: "" }));
      return;
    }

    setCityCords(() => ({ lat: `${data[0].lat}`, lon: `${data[0].lon}` }));
  };

  useEffect(() => {
    const getCity = async (lat: string, lon: string) => {
      const res = await getCitiesByCoord(lat, lon);
      const data: Coords[] = await res;
      setCityInputed(() => data[0].name);
    };

    navigator.geolocation.getCurrentPosition((position) => {
      const lat = `${position.coords.latitude}`;
      const lon = `${position.coords.longitude}`;

      setCityCords(() => ({
        lat,
        lon,
      }));

      getCity(lat, lon);
    });
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getSpecificCord(cityInputed);
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="type city"
          value={cityInputed}
          onChange={(e) => setCityInputed(() => e.target.value)}
        />
        <button>Submit</button>
      </form>
      {cityCords.lat.length > 0 ? (
        <Suspense fallback={<p>Loading..</p>}>
          <WeatherCard {...cityCords} />
        </Suspense>
      ) : (
        <p>City not found</p>
      )}
    </main>
  );
}
