import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import Hover from './Hover';
import Wrapper from './Wrapper';

export default function Content() {
    const context = useContext(ThemeContext);
    const { theme, changeTheme } = context;
    return (
        <div>
            <Wrapper
                name={(count, handleClick) => (
                    <Hover
                        count={count}
                        handleClick={handleClick}
                        theme={theme}
                        changeTheme={changeTheme}
                    />
                )}
            />
        </div>
    );
}
