import React from 'react';


export default function Media(props) {
    const {mediaType, title, src, copyright} = props;
  // Receives data from Main as props
    return (
        <div className='image'> 
            <h2>{title}</h2>

            {/* Create conditional render for image or video */}
            {
                mediaType === 'image'? 
                    <img src={src} max-width="100%"/> : 
                    <iframe width="420" height="315"
                    src={src + "?autoplay=1&mute=1"}>
                    </iframe>      
            }
            {/*Create conditional render if data contains copyright value - not null */}
           <p>{copyright && `Copyright: ${copyright}`}</p>
        </div>
    )
}