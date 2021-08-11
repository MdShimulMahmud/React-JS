import React from 'react';
import Counter from './components/Counter';
import Section from './components/Section';
import Wrapper from './components/Wrapper';
import ThemeContext from './context/ThemeContext';

class App extends React.Component {
    state = {
        theme: 'dark',
        changeTheme: () => {
            this.setState(({ theme }) => {
                if (theme === 'dark') {
                    return { theme: 'light' };
                }

                return { theme: 'dark' };
            });
        },
    };

    render() {
        const { theme, changeTheme } = this.state;
        return (
            <div className="App">
                <Wrapper
                    name={(count, handleClick) => (
                        <Counter count={count} handleClick={handleClick} />
                    )}
                />
                <ThemeContext.Provider value={{ theme, changeTheme }}>
                    <Section />
                </ThemeContext.Provider>
            </div>
        );
    }
}

export default App;
