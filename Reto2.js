countHours = (year, holidays, h=0) => {
    holidays.map(holiday =>(new Date(holiday.concat("/" + year)).getDay() % 6) && h++)
    return h*2
  }
  