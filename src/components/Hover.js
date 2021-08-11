import React from 'react';

function Hover({ count, handleClick }) {
    return (
        <div className="counter">
            <h3>{count}</h3>
            <h3 onMouseOver={handleClick} onFocus>
                Hover here
            </h3>
        </div>
    );
}
export default Hover;
