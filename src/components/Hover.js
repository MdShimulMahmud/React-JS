import React from 'react';

<<<<<<< HEAD
function Hover({ count, handleClick, theme, changeTheme }) {
    const style =
        theme === 'dark'
            ? {
                  backgroundColor: 'red',
              }
            : { backgroundColor: 'green' };

=======
function Hover({ count, handleClick }) {
>>>>>>> d1bc18a73ac60ef3e3d1053d1aa0295a7a80f641
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
