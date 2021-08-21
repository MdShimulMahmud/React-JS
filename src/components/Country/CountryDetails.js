import React from 'react';

const CountryDetails = ({ countryNames }) => {
    const style = {
        border: '2px solid red',
        margin: '10px',
        padding: '10px',
    };
    console.log(countryNames);
    const { name, nativeName, population } = countryNames;
    return (
        <div style={style}>
            <p>Country: {name}</p>
            <h3>Native name: {nativeName}</h3>
            <p>Total Population: {population}</p>
        </div>
    );
};

export default CountryDetails;
