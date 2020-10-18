import React from 'react';

export default function InfoBox(props) {
    const {title, date, text, copyright} = props;
    console.log(props.text);
    return(
        <div>
            <h2>{title}</h2>
            <p>{date}</p>
            <p>{text}</p>
            <p>{copyright && `Copyright: ${copyright}`}</p>
        </div>
    )
}