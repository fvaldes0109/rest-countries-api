const getAllCountries = async () => {

    // Send a get request to https://restcountries.com/v2/all with parameters
    const response = await fetch('https://restcountries.com/v2/all?fields=name,capital,region,population,flag');
    const data = await response.json();

    return data.map(((country, index) => {
        country.index = index;
        return country;
    }));
}

module.exports = {
    getAllCountries,
}