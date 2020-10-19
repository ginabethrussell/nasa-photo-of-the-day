import React, {useState} from 'react';
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";

export default function DateSelector(props) {
    const {handleChange} = props;
    const date = new Date();
    
    return (
      <div className='dateSelector'>
        <h3>Select a Date: </h3>
        <DatePicker selected={date} onChange={ date => handleChange(date)} />
      </div>
  );      
}
