import { useLoaderData } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "../../../components/card";
import WeatherData from "../../../types/WeatherTypes";
import { useState } from "react";

export const SearchCard = () => {
    const [unitType, setUnitType] = useState<"fahrenheit" | "celsius">("fahrenheit");

    const weatherData: WeatherData = useLoaderData();

    return (
        <Card className="flex flex-col items-center w-full h-[60vh] overflow-y-auto">
            <CardHeader>
                <CardTitle>
                    Weather in {weatherData.location.name === weatherData.location.region
                        ? weatherData.location.name
                        : <>{weatherData.location.name}, {weatherData.location.region}</>}, {weatherData.location.country}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>
                    <div className="current">
                        <header>
                            <h1 className="color-blue-500 underline">
                                Current Weather
                            </h1>
                        </header>
                    </div>
                </CardDescription>
            </CardContent>
            <CardFooter>

            </CardFooter>
        </Card>
    );
}