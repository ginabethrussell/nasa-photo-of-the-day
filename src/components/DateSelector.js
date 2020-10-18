import React, {useState} from 'react';
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";

export default function DateSelector(props) {
    const {handleChange, updateData} = props;
    const date = new Date();
    
    return (
        <DatePicker selected={date} onChange={date => handleChange(date)} onSelect={updateData()}/>
  );      
}
