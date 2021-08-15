import React, { forwardRef } from 'react';

function ShowInput({ type, placeholder }, ref) {
    return (
        <div>
            <input ref={ref} type={type} placeholder={placeholder} />
        </div>
    );
}

const forwardInput = forwardRef(ShowInput);
export default forwardInput;
