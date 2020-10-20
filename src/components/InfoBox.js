import React from 'react';

export default function InfoBox(props) {
    // Receive data as props from Main component
    const {date, text} = props;

    console.log(props.text);
    return(
        <div className="infoBox">
            <p className="date">{date}</p>
            <p>{text}</p>
        </div>
    )
}