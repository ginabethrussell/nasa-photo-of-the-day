import React from 'react';
import Media from './Media';
import InfoBox from './InfoBox';
import DateSelector from './DateSelector';

export default function Main({nasaData, handleChange}) {

    return (
        <div>
           <Media src={nasaData.url} mediaType={nasaData.media_type}/>
           <InfoBox title={nasaData.title} date={nasaData.date} text={nasaData.explanation} copyright={nasaData.copyright} />
           <DateSelector handleChange={handleChange} />
        </div>
    )
}