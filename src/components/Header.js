import React from 'react';
import styled from 'styled-components';

// Use styled-components to write CSS for Header Component
const HeaderDiv = styled.div`
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100px;
    width: 100%;
    font-size: 2rem;
    
    @media (max-width: 500px){
        height: auto;
        flex-direction: column;
        padding-top: 20px;
        padding-bottom: 20px;
    }
`;

const HeaderImg = styled.img`
    height: 75px
    @media(max-width: 500px){
        height: 100px;
    }`;
    
const HeaderH1 = styled.h1`
    font-size: 2.2rem;
    text-align: center;
    padding-right: 20px;
    @media (max-width: 500px){
        width: 75%;
        margin: 0 auto;
    }
    `;

export default function Header() {
    // Static component
    // Accepts no props, sets no component variables
    return (
        <HeaderDiv>
            <HeaderImg src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" alt="nasa logo" />
            <HeaderH1> NASA Astronomy Picture of the Day</HeaderH1>
        </HeaderDiv>
    )
}