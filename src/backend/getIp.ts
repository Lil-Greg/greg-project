import { IpifyGeolocationResponse } from "@/libs/types/IpifyGeolocationTypes";
import { CurrentWeatherRes } from "@/libs/types/WeatherTypes";
import countryIsoUtil from "@/libs/utils/countryIso-util";
import { useQuery } from "@tanstack/react-query";

const geoapikey = import.meta.env.VITE_IPIFY_API_KEY;
const weatherapikey = import.meta.env.VITE_WEATHER_API_KEY;

type IpifiyResponse = {
    ip: string;
};

async function getIp(): Promise<IpifiyResponse> {
    return await fetch("https://api.ipify.org?format=json").then(async (data) => await data.json());

}
async function geolocation(ip: string): Promise<IpifyGeolocationResponse> {
    return await fetch(`https://geo.ipify.org/api/v2/country?apiKey=${geoapikey}&ipAddress=${ip}`).then(async (data) => await data.json());
}

async function getCurrentWeather(location: string): Promise<CurrentWeatherRes> {
    return await fetch(`http://api.weatherapi.com/v1/current.json?q=${location}&key=${weatherapikey}`).then(async (data) => await data.json())
}

export const useGeoLocation = () => {
    const weather = useQuery({
        queryKey: ["currentWeather"],
        queryFn: async () => {
            const ip = await getIp();
            const geo = await geolocation(ip.ip);

            const countryName = countryIsoUtil(geo.location.country);

            if (geo.location.region !== "") {
                return await getCurrentWeather(encodeURIComponent(`${geo.location.region}, ${countryName}`));
            } else {
                return await getCurrentWeather(encodeURIComponent(`${countryName}`));
            }


        },
        staleTime: 3 * (60 * 1000),
        gcTime: 5 * (60 * 1000)

    });
    return weather;
}