import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <ul className="NavList">
                <li>
                    <Link exact to="/">Log in</Link>
                </li>
                <li>
                    <Link to="/singup">Sing up</Link>
                </li>
            </ul>
        );
    }
}

export default NavBar;