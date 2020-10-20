import React from 'react';
import Media from './Media';
import InfoBox from './InfoBox';
import DateSelector from './DateSelector';
import styled from 'styled-components';

const MainDiv = styled.div`
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
    align-content: space-around;
    flex-wrap: wrap;
    @media (max-width: 800px){
        flex-direction: column;
        align-items: center;
    }
`;


export default function Main({nasaData, handleChange}) {
// Receives nasaData and handleChange callback function as props
// Passes keys from nasaData as props to rendered components
    return (
        <MainDiv>
           <Media title={nasaData.title} src={nasaData.url} mediaType={nasaData.media_type} copyright={nasaData.copyright}/>
           <InfoBox title={nasaData.title} date={nasaData.date} text={nasaData.explanation} />
           <DateSelector handleChange={handleChange} />
        </MainDiv>
    )
}