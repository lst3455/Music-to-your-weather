import React, { useState, useEffect } from 'react';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import './Calendar.css';

const Calendar = (props) => {

  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    console.log("selectedDate: " + selectedDate);
  }, [selectedDate]);

  const onDateChange = (e) => {
    // set the selected date to the selectedDate
    setSelectedDate(e.value);
  };

  return (
    <div>
      <div class="right-column">
        <div class="calendar">
          <DatePickerComponent
            cssClass="e-datepicker"
            placeholder='Enter Date'
            format={"dd-MMM-yy"}
            onChange={onDateChange} 
          ></DatePickerComponent>
        </div>
      </div>
    </div>
  );
};

export default Calendar;