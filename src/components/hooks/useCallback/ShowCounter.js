import React from 'react';

function ShowCounter({ title, count, handleClick }) {
    console.log(`${title}`);
    return (
        <div>
            <h2>
                {title}
                <br />
                {count}
            </h2>
            <button type="button" onClick={handleClick}>
                Click
            </button>
        </div>
    );
}

export default React.memo(ShowCounter);
