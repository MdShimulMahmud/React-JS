import { useEffect, useState } from 'react';
import CountryDetails from './CountryDetails';

const Country = () => {
    const [country, setCountry] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then((res) => res.json())
            .then((data) => setCountry(data));
        return () => {};
    }, []);
    return (
        <div>
            {country.map((countryNames) => (
                <p>
                    <CountryDetails countryNames={countryNames} />
                </p>
            ))}
        </div>
    );
};

export default Country;
