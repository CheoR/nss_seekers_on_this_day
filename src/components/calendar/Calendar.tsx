import React, { useState } from 'react';

import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';

import './Calendar.css';

export const MyCalendar = () => {
  const [value, onChange] = useState(new Date());

  const handleClick = (_value: any) => {
    const day = new Date(_value).getDate();
    const month = new Date(_value).getMonth();

    console.log(day, month);
  };

  return (
    <div className="calendarCntr">
      <Calendar
        className="calendar"
        onChange={onChange}
        value={value}
        onClickDay={handleClick}
      />
    </div>
  );
};

