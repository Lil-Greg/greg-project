import React, { useRef, useState } from "react";
import { Form as ReactRouterForm, useLoaderData } from "react-router-dom";
import WeatherData from "../../types/WeatherTypes";
import { SearchInput } from "../../components/SearchInput";
import { SearchCard } from "./SearchCard";
import { places } from "./SearchList";

export default function Search() {
    const [unitType, setUnitType] = useState<"fahrenheit" | "celsius">("fahrenheit");
    const cityRef = useRef<HTMLInputElement>(null);
    const countryRef = useRef<HTMLInputElement>(null);

    const data: WeatherData = useLoaderData();
    console.log("Weather Data: ", data);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Do the weather call
    }
    return (
        <>
            <div className="size-full h-[100vh] flex flex-col place-items-center">
                <div className="">
                    <h1 className="text-center underline leading-[2]">Weather</h1>
                    <ReactRouterForm
                        onSubmit={handleSubmit}
                        className="relative w-[50vw] h-10vh gap-2 flex lg:flex-row md:flex-col justify-between"
                    >
                        <SearchInput
                            type="search"
                            label="Search City"
                            id="weather-city-search"
                            placeholder="Search City"
                            ref={cityRef}
                            list="weather-city-list"
                        />

                        <datalist id="weather-city-list">
                            {places.cities.map((city, index) => (
                                <option value={city} key={index}>
                                    {city}
                                </option>
                            ))}
                        </datalist>

                        <SearchInput
                            type="search"
                            label="Search Country"
                            id="weather-country-search"
                            list="weather-country-list"
                            placeholder="Search Country"
                            ref={countryRef}
                        />

                        <datalist id="weather-country-list">
                            {places.countries.map((country, index) => (
                                <option value={country} key={index}>
                                    {country}
                                </option>
                            ))}
                        </datalist>
                    </ReactRouterForm>
                    {data && <SearchCard weatherData={data} />}
                </div>
            </div>
            <h3>{data.location.name}</h3>
            <h6>{data.current.condition.text}</h6>
            <img src={data.current.condition.icon} />
        </>
    );
}