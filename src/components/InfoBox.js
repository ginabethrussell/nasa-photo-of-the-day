import React from 'react';

export default function InfoBox(props) {
    const {title, date, text, copyright} = props;
    console.log(props.text);
    return(
        <div>
            This component will display title, date, and text from NASA API
            <h2>{`Title: ${title}`}</h2>
            <p>{`Date: ${date}`}</p>
            <p>{`Text: ${text}`}</p>
            <p>{ copyright && `Copyright: ${copyright}`}</p>
        </div>
    )
}