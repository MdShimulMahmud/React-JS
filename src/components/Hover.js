import React from 'react';

function Hover({ count, handleClick, theme, changeTheme }) {
    const style =
        theme === 'dark'
            ? {
                  backgroundColor: 'red',
              }
            : { backgroundColor: 'green' };

    return (
        <div className="counter">
            <h3 onMouseOver={handleClick} onFocus style={style}>
                Hover {count} here
            </h3>
            <button type="button" onClick={changeTheme}>
                change theme
            </button>
        </div>
    );
}
export default Hover;
