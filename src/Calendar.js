import DayJS from 'dayjs';
import React from 'react';
import './css/Calendar.css';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    const monthsIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    const calendarScaffold = []
    monthsIndex.forEach(month => {
      const monthArray = []
      for (let i = 1; i <= parseInt(DayJS().month(month).daysInMonth()); i++) {
        monthArray.push(i);
      }
      calendarScaffold.push(monthArray);
    })

    this.state = {
      bgColor: "",
      textColor: "",
      calendarYear: calendarScaffold.map((days, index) => {
        const daysInMonth = []
        //add a key: value for the bgcolor of everyday. then set the style background to days.bgColor
        days.forEach(e => daysInMonth.push({ id: 1 + Math.random(), date: e }));
        return (
          {
            name: DayJS().month(index).format('MMM').toString(),
            days: [...daysInMonth]
          }
        )
      })
    }
  }

  dayClick = () => {
    this.setState({
      bgColor: "red"
    });
  }

  render() {
    return (
      <div className="Calendar">
        {this.state.calendarYear.map((month) => {
          return (
            <div className="Month">
              <strong>{month.name}</strong>
              <ul>
                {month.days.map(day => {
                  return (
                    <li
                      key={day.id}
                      onClick={() => this.dayClick(day.id)}
                      style={{ backgroundColor: this.state.bgColor }}
                    >
                      {day.date}
                    </li>
                  )
                })}

              </ul>
            </div>
          )
        })
        }
      </div >
    )
  }
}

export default Calendar;