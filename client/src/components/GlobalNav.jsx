import React, { Component } from 'react';
import { Link } from "react-router-dom"
import styled from 'styled-components';

const Nav = styled.div`
width:95%;
`

class GlobalNav extends Component {
    render() {
        return (
            <Nav>
                <div>
                <Link to="/">
                    <h1>tunr</h1>
                </Link>
                </div>
                <div>
                <Link to="/artist/1">Artists</Link>
                <Link to="/signup">Sign Up!</Link>
                </div>
            </Nav>
        )
    }
}

export default GlobalNav;