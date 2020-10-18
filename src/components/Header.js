import React from 'react';
import Navbar from './Navbar';

export default function Header() {
    return (
        <div>
            <img src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" alt="nasa logo" />
            <h1> NASA Astronomy Picture of the Day</h1>
            <Navbar />

        </div>
    )
}