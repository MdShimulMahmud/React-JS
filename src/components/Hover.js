import React from 'react';
import withCounter from '../HOC/withCounter';

function Hover(props) {
    const { count, handleClick } = props;
    return (
        <div className="counter">
            <h3>{count}</h3>
            <h3 onMouseOver={handleClick} onFocus>
                Hover here
            </h3>
        </div>
    );
}
export default withCounter(Hover);
