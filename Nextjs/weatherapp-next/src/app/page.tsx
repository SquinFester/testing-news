"use client";

import WeatherCard from "@/components/WeatherCard";
import getCoordinates from "@/utility/getCoordinates";
import { FormEvent, useState, useEffect, Suspense } from "react";

type Cord = {
  lat: string;
  lon: string;
};

export default function Home() {
  const [cityInputed, setCityInputed] = useState<string>("Leszno");
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
    getSpecificCord(cityInputed);
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
