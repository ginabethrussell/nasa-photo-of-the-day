import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default function Page() {
    const [data, setData] = useState({});

    useEffect( () => {
        console.log("set up api call here");
    }, []
    );

    return(
        <>
            <Header />
            <Main />
            <Footer />  
           
        </>
    )
}
