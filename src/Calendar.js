import DayJS from 'dayjs';
//import { months } from 'dayjs/locale/*';
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
        //let monthName = DayJS().month(month).format('MMM').toString()
        calendarYear.push(monthArray)
      }
      return calendarYear
    }
    const testDays = getCalendar([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])

    this.state = {
      fullYear: [...testDays]
    }
  }
  render() {
    return (
      <div className="Calendar">
        {this.state.fullYear.map((month, index) => {
          return (
            <div>
              {DayJS().month(index).format('MMM').toString()}
              <ul>
                {month.map(day => {
                  return (
                    <li key={day + Math.random()}>
                      {day}
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

/*
let getCalendar = (months) => {
  let calendarYear = []
  for (const month in months) {
    let monthArray = []
    for (let i=1; i <= parseInt(DayJS().month(month).daysInMonth()); i++) {
      monthArray.push(i);
    }
    calendarYear.push(monthArray)
  }
  return calendarYear
}
const testDays = getCalendar([0,1,2,3,4,5,6,7,8,9,10,11])
console.log(testDays) */