import React from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.div`
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100px;
    width: 100%;
    font-size: 2rem;
`;

const HeaderImg = styled.img`
    height: 75px`;

export default function Header() {
    // Static component
    // Accepts no props, sets no component variables
    return (
        <HeaderDiv>
            <HeaderImg src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" alt="nasa logo" />
            <h1> NASA Astronomy Picture of the Day</h1>
        </HeaderDiv>
    )
}