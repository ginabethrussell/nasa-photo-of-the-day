import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import moment from 'moment';

export default function Page() {
    const [data, setData] = useState({});
    const [queryDate, setQueryDate] = useState('');

    const handleChange = (date) =>{
        console.log("change date" + date);
        setQueryDate(date);
    }
    const updateData = (newDateQuery) =>  {
        const queryDate = moment(newDateQuery).format("YYYY-MM-DD");
        const queryStr = "&date=" + queryDate;
        console.log(queryStr);
        setQueryDate(queryStr);
    };
    
   
    useEffect( () => {
        console.log("set up api call here");
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=93HIdg6dILvLH6B3N38HAFAhLyTE2s9BauFO8Mof" + queryDate)
            .then(response => {
                setData(response.data);
            })
            .catch(err => console.log(err.response));
    }, []
    );
    console.log(data);
    return(
        <>
            <Header />
            <Main nasaData={data} handleChange={handleChange} updateData={updateData}/>
            <Footer />  
           
        </>
    )
}
