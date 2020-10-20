import React, {useState} from 'react';
// imported datepicker and datepicker css
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";

export default function DateSelector(props) {
    const {handleChange} = props;
    //Create today's date for DatePicker selected value
    const date = new Date();
    // Create state to hold whether date picked is valid ( is not in the future)
    const [validDate, setValidDate] = useState(true);
    
    return (
      <div className='dateSelector'>
        <h3>Select a Date: </h3>
        {/* imported component and styling
        onChange passes in date selected
        conditional checks to see if date is valid
        if valid, passes date to handleChange to create a new query in Page component
        if invalid, creates an error message for user if invalid date selected */}
        <DatePicker selected={date} onChange={ date => {
          if (date < new Date()){
            handleChange(date)
            setValidDate(true);
          }else {
            setValidDate(false);
          }
        }} />
        {/* Conditional render for message or error message */}
        <p className="validDate">
          { validDate? 'Choose any date between June 1, 1995 and today.': 
        'Date must be before today. No future data is available.'}
        </p>
      </div>
  );      
}
