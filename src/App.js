import React from 'react';
<<<<<<< HEAD
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
=======
import Hover from './components/Hover';
import Wrapper from './components/Wrapper';
import Counter from './Counter';

function App() {
    return (
        <div className="App">
            <Wrapper
                name={(count, handleClick) => <Counter count={count} handleClick={handleClick} />}
            />
            <Wrapper
                name={(count, handleClick) => <Hover count={count} handleClick={handleClick} />}
            />
        </div>
    );
>>>>>>> d1bc18a73ac60ef3e3d1053d1aa0295a7a80f641
}

export default App;
