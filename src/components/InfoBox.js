import React from 'react';
import styled from "styled-components";
const InfoBoxDiv = styled.div`
    margin-top: 1.6rem;
    padding-left: 20px;
    padding-right: 20px;
    width: 45%;
    font-size: 1.8rem;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    @media(max-width: 800px){
        width: 75%;
        margin: 0 auto;
        padding-left: 0;
    }
`;
const InfoBoxDate = styled.p`
    align-self: flex-end;
    font-weight: 600;
`;
const InfoBoxText = styled.p`
    font-size: 1.8rem;
`;
export default function InfoBox(props) {
    // Receive data as props from Main component
    const {date, text} = props;

    console.log(props.text);
    return(
        <InfoBoxDiv>
            <InfoBoxDate>{date}</InfoBoxDate>
            <InfoBoxText>{text}</InfoBoxText>
        </InfoBoxDiv>
    )
}