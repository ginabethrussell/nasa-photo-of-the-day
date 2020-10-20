import React from 'react';
import styled from "styled-components";

const ImageDiv = styled.div`
    width: 45%;
    max-width: 400px;
    margin: 0 auto;
    @media(max-width: 800px){
        width: 100%;
        max-width: 600px;
    }
`;
const ImageDivH2 = styled.h2`
    width: 75%;
    margin: 0 auto;
    font-size: 3rem;
    margin-bottom: 25px;`
;

 const ImageDivImg = styled.img`
    margin: 0 auto;
    width: 100%;
    max-width: 600px;
 `;

 const MediaIframe = styled.iframe`
    width: 100%;
    max-width: 600px;
    height: 300px;
    @media(max-width: 800px){
        height: 450px;
    }`;
const ImageDivP = styled.p`
    font-size: 1.8rem;
    `;
export default function Media(props) {
    const {mediaType, title, src, copyright} = props;
  // Receives data from Main as props
    return (
        <ImageDiv> 
            <ImageDivH2>{title}</ImageDivH2>

            {/* Create conditional render for image or video */}
            {
                mediaType === 'image'? 
                    <ImageDivImg src={src} max-width="100%"/> : 
                    <MediaIframe width="100%"
                    src={src + "?autoplay=1&mute=1"}>
                    </MediaIframe>      
            }
            {/*Create conditional render if data contains copyright value - not null */}
           <ImageDivP>{copyright && `Copyright: ${copyright}`}</ImageDivP>
        </ImageDiv>
    )
}