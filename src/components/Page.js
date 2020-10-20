import React, { useState, useEffect } from 'react';
import axios from 'axios'; // used for HTTP GET request
import moment from 'moment'; // used to reformat date for api query
import styled from 'styled-components';

// Import three rendered components
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

// Set up CSS for Page component 
const PageDiv = styled.div`
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
`;

// Set up initial date query for api call
const today = new Date();
const dateQuery = "&date=" + moment(today).format("YYYY-MM-DD");

export default function Page() {
    // Create state for api data object
    const [data, setData] = useState({});
    // Create state for queryDate value
    const [queryDate, setQueryDate] = useState(dateQuery);

    // statehandler for date query, passed as props to DateSelector component
    const handleChange = (date) =>{
        console.log("change date " + date);
        // reformat date
        const newQueryDate = moment(date).format("YYYY-MM-DD");
        // build query string
        const queryStr = "&date=" + newQueryDate;
        // update state
        setQueryDate(queryStr);
        console.log(queryDate);
    }
    
    // Create useEffect function to handle API call
    // Set to execute on page component mount and when queryData state changes

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
        <PageDiv>
            <Header />
            <Main nasaData={data} handleChange={handleChange} />
            <Footer />      
        </PageDiv>
    )
}
