import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import moment from 'moment';

const today = new Date();
const dateQuery = "&date=" + moment(today).format("YYYY-MM-DD");

export default function Page() {
    const [data, setData] = useState({});
    const [queryDate, setQueryDate] = useState(dateQuery);

    const handleChange = (date) =>{
        console.log("change date " + date);
        const newQueryDate = moment(date).format("YYYY-MM-DD");
        const queryStr = "&date=" + newQueryDate;
        setQueryDate(queryStr);
        console.log(queryDate);
    }
    
    useEffect( () => {
        console.log("set up api call here");
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=93HIdg6dILvLH6B3N38HAFAhLyTE2s9BauFO8Mof" + queryDate)
            .then(response => {
                setData(response.data);
            })
            .catch(err => console.log(err.response));
    }, [queryDate]
    );
    console.log(data);
    return(
        <div className='page'>
            <Header />
            <Main nasaData={data} handleChange={handleChange} />
            <Footer />      
        </div>
    )
}
