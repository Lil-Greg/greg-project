const countryIsoUtil = (countryIso: string) => {
    const countryName = new Intl.DisplayNames(["en"], { type: "region" }).of(countryIso);

    return countryName;
}

export default countryIsoUtil;
