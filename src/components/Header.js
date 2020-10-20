import React from 'react';

export default function Header() {
    // Static component
    // Accepts no props, sets no component variables
    return (
        <div className="header">
            <img src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" alt="nasa logo" />
            <h1> NASA Astronomy Picture of the Day</h1>
        </div>
    )
}