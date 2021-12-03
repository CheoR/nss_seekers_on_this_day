import React from 'react';

import { GoButton } from './components/button/GoButton';
import { MyCalendar } from './components/calendar/Calendar';
import { Data } from './components/data/Data';

import './App.css';

export const App = () => (
  <div className="App">
    <div>On This Day</div>
    <Data />
    <GoButton />
    <MyCalendar />
  </div>
);
