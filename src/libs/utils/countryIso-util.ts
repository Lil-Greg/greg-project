const countryIsoUtil = (countryIso: string) => {
    const countryName = new Intl.DisplayNames(["en"], { type: "region", fallback: "code" }).of(countryIso);

    console.log("ISO: ", countryName)
    return countryName;
}

export default countryIsoUtil;
