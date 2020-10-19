import React from 'react';


export default function Media(props) {
    const {mediaType, title, src, copyright} = props;
  
    return (
        <div className='image'> 
            <h2>{title}</h2>
            {
                mediaType === 'image'? 
                    <img src={src} max-width="100%"/> : 
                    <iframe width="420" height="315"
                    src={src + "?autoplay=1&mute=1"}>
                    </iframe>      
            }
           <p>{copyright && `Copyright: ${copyright}`}</p>
        </div>
    )
}