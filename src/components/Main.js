import React from 'react';
import Media from './Media';
import InfoBox from './InfoBox';
import DateSelector from './DateSelector';

export default function Main({nasaData, handleChange}) {

    return (
        <div className="main">
           <Media title={nasaData.title} src={nasaData.url} mediaType={nasaData.media_type} copyright={nasaData.copyright}/>
           <InfoBox title={nasaData.title} date={nasaData.date} text={nasaData.explanation} />
           <DateSelector handleChange={handleChange} />
        </div>
    )
}