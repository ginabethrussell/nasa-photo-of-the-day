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

 const ImageDivImg = styled.img`
    margin: 0 auto;
    width: 100%;
    max-width: 600px;
 `;
export default function Media(props) {
    const {mediaType, title, src, copyright} = props;
  // Receives data from Main as props
    return (
        <ImageDiv> 
            <h2>{title}</h2>

            {/* Create conditional render for image or video */}
            {
                mediaType === 'image'? 
                    <ImageDivImg src={src} max-width="100%"/> : 
                    <iframe width="420" height="315"
                    src={src + "?autoplay=1&mute=1"}>
                    </iframe>      
            }
            {/*Create conditional render if data contains copyright value - not null */}
           <p>{copyright && `Copyright: ${copyright}`}</p>
        </ImageDiv>
    )
}