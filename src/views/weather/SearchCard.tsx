import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "../../components/card";
import WeatherData from "../../types/WeatherTypes";

type Props = {
    weatherData: WeatherData;
}

export const SearchCard = ({ weatherData }: Props) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Weather in {weatherData.location.name}, {weatherData.location.region}, {weatherData.location.country}
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
    )
}