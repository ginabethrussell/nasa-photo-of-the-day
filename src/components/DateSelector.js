import React, {useState} from 'react';
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";

export default function DateSelector(props) {
    const {handleChange} = props;
    const date = new Date();
    const [validDate, setValidDate] = useState(true);
    
    return (
      <div className='dateSelector'>
        <h3>Select a Date: </h3>
        <DatePicker selected={date} onChange={ date => {
          if (date < new Date()){
            handleChange(date)
            setValidDate(true);
          }else {
            setValidDate(false);
          }
        }} />
        <p className="validDate">
          { validDate? 'Choose any date between June 1, 1995 and today.': 
        'Date must be before today. No future data is available.'}
        </p>
      </div>
  );      
}
