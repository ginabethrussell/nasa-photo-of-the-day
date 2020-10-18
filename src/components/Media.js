import React from 'react';

export default function Media(props) {
    const {mediaType, src} = props;
    console.log(src);
    return (
        <div> This component will render the returned image or video
            <p>{`Media Type: ${mediaType}`}</p>
            {
                mediaType === 'image'? 
                    <img src={src} /> : `No image available`
            }
            {`Media Source" ${src}`}
        </div>
    )
}