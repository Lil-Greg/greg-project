export function formatTemp(temp: number, type: "fahrenheit" | "celsius"): string {
    return new Intl.NumberFormat("en-US", {
        style: "unit",
        unit: type,
    }).format(temp);

}