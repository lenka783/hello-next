'use client';
import React from 'react';

function CounterButton({ hits }) {
  const [isCensored, setIsCensored] = React.useState(true);

  function handleClick() {
    setIsCensored(!isCensored);
  }

  return (
    <button className={isCensored ? 'censored' : ''} onClick={handleClick}>
      {hits}
    </button>
  );
}

export default CounterButton;
