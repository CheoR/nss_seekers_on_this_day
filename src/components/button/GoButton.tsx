import React from 'react';

const month = new Date().getMonth();
const date = new Date().getDate();

const url = `https://apizen.date?api=true&month=${month}&day=${date}`;

const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  alert(`Button Clicked: \n calling: ${url}`);
};


export const GoButton = () => <button type="button" onClick={handleClick}>Click</button>;
