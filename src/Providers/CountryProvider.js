export const getAllCountries = async () => {

    const response = await fetch('https://restcountries.com/v2/all?fields=name,capital,region,population,flag');
    const data = await response.json();

    return data.map(((country, index) => {
        country.index = index;
        return country;
    }));
}

export const getCountry = async (fullName) => {

    const response = await fetch(`https://restcountries.com/v3.1/name/${fullName}?fullText=true`);
    const data = await response.json();

    return data;
}

export const getCountriesNames = async (codes) => {

    if (codes === undefined) return [];
    const response = await fetch(`https://restcountries.com/v3.1/alpha?codes=${codes.toString()}&fields=name`);
    const data = await response.json();

    return data;
}