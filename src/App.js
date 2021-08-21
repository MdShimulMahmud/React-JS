import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import Home from './components/Home';
import Login from './components/Login';
import Navigation from './components/Navigation';
import Services from './components/Services';
import Todo from './components/Todo/Todo';

function App() {
    return (
        <Router>
            <Navigation />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/todos/:id">
                    <Todo />
                </Route>
                <Route path="/todos">
                    <Todo />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/services">
                    <Services />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route>
                    <Error />
                </Route>
            </Switch>
        </Router>
    );
}
export default App;
