import {useState} from 'react'
import Calendar from 'react-calendar';

function CalendarComponent() {
     const [value, onChange] = useState(new Date());

  return (
    <div className="calendar-container">
      <Calendar onChange={onChange} value={value} />
      <p>Selected Date: {value.toDateString()}</p>
    </div>
  );

}

export default CalendarComponent
