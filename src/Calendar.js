import DayJS from 'dayjs';
import React from 'react';


class Calendar extends React.Component {
  constructor(props) {
    super(props);

    let getCalendar = (months) => {
      let calendarYear = []
      for (const month in months) {
        let monthArray = []
        for (let i = 1; i <= parseInt(DayJS().month(month).daysInMonth()); i++) {
          monthArray.push(i);
        }
        calendarYear.push(monthArray)
      }
      return calendarYear
    }
    const testDays = getCalendar([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])

    const testYear = testDays.map((days, index) => {
      const newDay = []
      days.forEach(e => newDay.push({ id: 1 + Math.random(), date: e }));
      return (
        {
          name: DayJS().month(index).format('MMM').toString(),
          numDays: [...newDay]
        }
      )
    })

    this.state = {
      fullYear: [...testYear]
    }
  }
  render() {
    return (
      <div className="Calendar">
        {this.state.fullYear.map((month) => {
          return (
            <div>
              {month.name}
              <ul>
                {month.numDays.map(day => {
                  return (
                    <li key={day.id}>
                      {day.date}
                    </li>
                  )
                })}

              </ul>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Calendar;