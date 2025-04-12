const API_KEY = import.meta.env.WEATHER_API_KEY;

export const weatherLoader = async (/*query: string*/) => {
    const options = {
        method: "GET",
        headers: {
            "Authorization": API_KEY,
            "content-type": "application/json",
        }
    }

    // const data = await fetch(`http://api.weatherapi.com/v1/${q}`, options);
    const data = await fetch(`https://api.weatherapi.com/v1/forecast.json?q=20002&days=8&key=bf878f20994341fdada144448251204`);


    return await data.json();
}