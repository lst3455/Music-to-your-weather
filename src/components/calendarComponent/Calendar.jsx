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
            placeholder='Chose a date to go'
            format={"dd-MMM-yy"}
            onChange={onDateChange}
            strictMode={true}
            allowEdit={false}
            max={new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())}
          ></DatePickerComponent>
          <table>
            <tr>
              <th>Track</th>
              <th>Artist</th>
            </tr>
            <tr>
              <td>Requiem: II. Dies irae</td>
              <td>Giuseppe Verdi</td>
            </tr>
            <tr>
              <td>Requiem: II. Dies irae</td>
              <td>Giuseppe Verdi</td>
            </tr>
            <tr>
              <td>Requiem: II. Dies irae</td>
              <td>Giuseppe Verdi</td>
            </tr>
            <tr>
              <td>Requiem: II. Dies irae</td>
              <td>Giuseppe Verdi</td>
            </tr>
            <tr>
              <td>Requiem: II. Dies irae</td>
              <td>Giuseppe Verdi</td>
            </tr>
            <tr>
              <td>Requiem: II. Dies irae</td>
              <td>Giuseppe Verdi</td>
            </tr>
            <tr>
              <td>Requiem: II. Dies irae</td>
              <td>Giuseppe Verdi</td>
            </tr>
            <tr>
              <td>Requiem: II. Dies irae</td>
              <td>Giuseppe Verdi</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Calendar;