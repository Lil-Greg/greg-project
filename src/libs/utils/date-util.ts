const formatDate = (date: Date | number, timeZone: string) => {
    const dateChanged = new Intl.DateTimeFormat("en-US", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        timeZone,
    }).format(date);

    const time = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "numeric",
        timeZone,
        timeZoneName: "short",
    }).format(date);

    return { date: dateChanged, time };
}

export const formatForecastDate = (date: Date | number, timeZone: string) => {
    const forecastDate = new Intl.DateTimeFormat("en-US", {
        timeZone,
        weekday: "short",
        month: "short",
        day: "numeric"

    }).format(date);

    const forecastTime = new Intl.DateTimeFormat("en-US", {
        timeZone,
        hour: "numeric",
        minute: "numeric"
    }).format(date);

    return { forecastDate, forecastTime };
}
export default formatDate;