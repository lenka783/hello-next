'use client';
import React from 'react';

function Censored({ children }) {
  const [isCensored, setIsCensored] = React.useState(true);

  function handleClick() {
    setIsCensored(!isCensored);
  }

  return (
    <button className={isCensored ? 'censored' : ''} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Censored;
