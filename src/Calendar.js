import DayJS from 'dayjs';

function Calendar() {
  const monthList = (
    <div>
      <h1>{DayJS().month(0).format('MMM').toString()}</h1>
      <ul>
        <li>{DayJS().month(0).daysInMonth()}</li>
      </ul>
    </div>
  );

  return (
    <div className="Calendar">
      {monthList}
    </div>
  )
}

export default Calendar;