import React, { useReducer } from 'react';

const initialState = 0;

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;
    }
};

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2> {state} </h2>
            <button type="button" onClick={() => dispatch('increment')}>
                +
            </button>
            <button type="button" onClick={() => dispatch('decrement')}>
                -
            </button>
            
        </div>
    );
}

export default Counter;
