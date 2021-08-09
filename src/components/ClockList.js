import React from 'react';

export default function ClockList({ quantities = [] }) {
    return quantities.map((key) => (
        <div key={key}>
            <h3>Shimul</h3>
        </div>
    ));
}
