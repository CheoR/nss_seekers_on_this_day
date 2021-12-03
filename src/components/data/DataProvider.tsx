import React, { createContext, useState } from 'react';

const _month = new Date().getMonth();
const _day = new Date().getDate();

interface IData {
  day: number,
  month: number,
}

interface IDateData {
  data: IData;
  getData(): unknown;
  setData(): {
    day: number;
    month: number;
  }
}

const DataContext = createContext<IDateData>(null);

export const DataProvider = (props) => {
  const [data, setData] = useState<IData>({
    day: 0,
    month: 0,
  });

  const getData = (month: number = _month, day: number = _day) => fetch(`https://apizen.date?api=true&month=${month}&day=${day}`)
    .then((res) => res.json());

  return (
    /* eslint-disable-next-line */
    <DataContext.Provider value={{
      data,
      setData,
      getData,
    }}>
      { props.children }
    </DataContext.Provider>
  );
};
