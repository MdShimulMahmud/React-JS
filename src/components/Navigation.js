import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">about</Link>
            </li>
            <li>
                <Link to="/services">services</Link>
            </li>
            <li>
                <Link to="/login">login</Link>
            </li>
            <li>
                <Link to="/todos">Todo</Link>
            </li>
        </ul>
    </nav>
);

export default Navigation;
