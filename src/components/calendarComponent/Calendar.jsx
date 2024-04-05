import React, { useEffect } from "react";

const Calendar = (props) => {


  return (
    <div>
      <h4>Calendar</h4>
      <p>Latitude: {props.LatitudeFromPanelToCalendar}</p>
      <p>Longitude: {props.LongitudeFromPanelToCalendar}</p>
    </div>
  );
};

export default Calendar;