const getAllCountries = async () => {

    const response = await fetch('https://restcountries.com/v2/all?fields=name,capital,region,population,flag');
    const data = await response.json();

    return data.map(((country, index) => {
        country.index = index;
        return country;
    }));
}

export default getAllCountries;