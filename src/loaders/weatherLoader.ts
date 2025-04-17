import WeatherData from "../types/WeatherTypes";

// Have to put vite in the name when using
// env variables...
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const weatherLoader = async (q: string, days: number) => {

    if (!q) throw new Response("", { status: 400, statusText: "" });

    const options = {
        method: "GET",
        headers: {
            "Authorization": API_KEY,
            "Content-Type": "application/json"
        }
    }

    const response: Response = await fetch(`http://api.weatherapi.com/v1/${days === 0 ? "forecast" : "current"}.json?q=${q}${days !== 0 && `&days=${days}`}&key=${API_KEY}`, options);
    // Delete catch error b/c the api automatically formats the error.
    // so, with this if statement, forma the error response
    // yourself...

    if (response.ok === false) {
        throw new Error("Response if False");
    }
    const data: WeatherData = await response.json();
    return data;
}