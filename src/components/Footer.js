import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div`
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100px;
    width: 100%;
    font-size: 2rem;
`;
export default function Footer() {
    // Static component
    // Receives no props
    return (
        <FooterDiv>
            <p>Copyright 2020 Gina Russell</p>
        </FooterDiv>
    )
}