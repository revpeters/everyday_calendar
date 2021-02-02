import DayJS from 'dayjs';
import React from 'react';


class Calendar extends React.Component {
  render() {
    let monthList = DayJS().month(0).format('MMM').toString()

    let days = []
    for (let i=1; i <= parseInt(DayJS().month(0).daysInMonth()); i++) {
      days.push(i);
    }
  
    let daysList = days.map((day, i) =>
      <li key={DayJS().month(0).format('MMM').toString()+'_day'}>{day}</li>
    )
  
    return (
      <div className="Calendar">
        <h1>{monthList}</h1>
        <ul>{daysList}</ul>
      </div>
    )
  }
}

export default Calendar;