import { useLoaderData } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "../../../components/card";
import WeatherData from "../../../libs/types/WeatherTypes";
import { useState } from "react";
import { formatTemp } from "../../../libs/utils/tempUtil";
import formatDate, { formatForecastDate } from "../../../libs/utils/date-util";
import "../Search.css";

const SearchCard = () => {
    const [unitType, setUnitType] = useState<"fahrenheit" | "celsius">("fahrenheit");

    const weatherData: WeatherData = useLoaderData();

    const tempWithUnit = formatTemp((unitType === "fahrenheit" ? weatherData.current.temp_f : weatherData.current.temp_c), unitType);
    // Use Format Temp in UI

    const dateObject = new Date(weatherData.location.localtime_epoch * 1000);// Puts in Milliseconds; GOt From Here: https://stackoverflow.com/questions/4631928/convert-utc-epoch-to-local-date
    const { date, time } = formatDate(dateObject, weatherData.location.tz_id);
    const timeOfDay = weatherData.current.is_day === 0 ? "night" : "day";

    const forecastDateStuff: Array<{ forecastDate: string, forecastTime: string }> = [];

    for (let forecastStuff of weatherData.forecast.forecastday) {
        let forecastDateObejct = new Date(forecastStuff.date);
        forecastDateStuff.push(formatForecastDate(forecastDateObejct, weatherData.location.tz_id));
    }
    console.log(forecastDateStuff);
    return (
        <Card className={`${timeOfDay} flex flex-col items-center w-full min-h-[65vh] max-h-[77vh] overflow-hidden`}>
            <CardHeader>
                <CardTitle className="flex flex-col items-center gap-2">
                    <h1 className="underline underline-offset-6 mb-1" style={{ fontSize: "1.75rem" }}>
                        {weatherData.location.name === weatherData.location.region
                            ? weatherData.location.name
                            : <>{weatherData.location.name}, {weatherData.location.region}</>}, {weatherData.location.country}
                    </h1>
                    <h4 className="w-full flex flex-row justify-evenly" style={{ fontSize: "calc(2rem / 2)" }}>
                        <span>
                            {date}
                        </span>
                        <span>
                            Updated At: {time}
                        </span>
                    </h4>
                </CardTitle>
            </CardHeader>
            <CardContent className="w-[100%] h-full">
                <CardDescription className='w-full h-full'>

                    <div className="h-full">
                        <div className="current-weather w-[30%] h-[auto]">
                            <div className="w-[75%] flex flex-row justify-between">
                                {tempWithUnit}
                                <div>
                                    <span className="hover:bg-white" onClick={() => setUnitType("fahrenheit")}>
                                        °F
                                    </span>
                                    &nbsp;|&nbsp;
                                    <span className="hover:bg-white" onClick={() => setUnitType("celsius")}>
                                        °C
                                    </span>
                                </div>
                            </div>
                            <div>
                                <p className="inline text-[17px]">
                                    Conditions:&nbsp;{weatherData.current.condition.text}
                                </p>
                                <img
                                    src={weatherData.current.condition.icon}
                                    alt={`${weatherData.current.condition.text} Icon`}
                                    className="inline size-[3rem]"
                                />
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </CardDescription>
            </CardContent>
            <CardFooter className="h-[20%]">
                {/* Forecast */}
                <div className="flex flex-row justify-center overflow-x-auto">
                    {weatherData.forecast.forecastday.map((forecastInfo, index) => (
                        <div className="flex flex-col items-center" key={index}>
                            <div className="flex flex-row justify-between">
                                <img src={forecastInfo.day.condition.icon} alt={`${forecastInfo.day.condition.text} Icon`} className="size-[40%]" />
                                {forecastInfo.day.condition.text}
                            </div>
                            {formatTemp((unitType === "fahrenheit" ? forecastInfo.day.maxtemp_f : forecastInfo.day.maxtemp_c), unitType)}
                            {forecastDateStuff[index].forecastDate}
                            {forecastDateStuff[index].forecastTime}
                            {index}
                        </div>
                    ))}
                </div>
            </CardFooter>
        </Card>
    );
}
export default SearchCard;