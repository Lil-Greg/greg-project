import React, { useState } from "react";
import { Form, useLoaderData } from "react-router-dom";
import WeatherData from "../../types/WeatherTypes";

export default function Search() {
    const [unitType, setUnitType] = useState<"fahrenheit" | "celsius">("fahrenheit");

    const data: WeatherData = useLoaderData();
    console.log("Weather Data: ", data);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }
    return (
        <>
            <div className="container">
                <h1>Search</h1>
                <div className="card">
                    <Form onSubmit={handleSubmit}>

                    </Form>
                    <div className="">
                        <div className="current">
                            <header>
                                <h1 className="color-blue-500 underline">
                                    Current Weather
                                </h1>
                            </header>
                        </div>
                    </div>
                </div>
            </div>
            <h3>{data.location.name}</h3>
            <h6>{data.current.condition.text}</h6>
            <img src={data.current.condition.icon} />
        </>
    );
}