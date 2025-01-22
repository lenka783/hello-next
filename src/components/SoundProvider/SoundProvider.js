'use client';
import React from 'react';

const SoundContext = React.createContext();

export function useSoundContext() {
  const context = React.useContext(SoundContext);

  if (!context) {
    throw new Error('Cannot consume SoundContext without a Sound provider');
  }

  return context;
}

function SoundProvider({ children }) {
  const [soundEnabled, setSoundEnabled] = React.useState(true);

  return (
    <SoundContext.Provider value={{ soundEnabled, setSoundEnabled }}>
      {children}
    </SoundContext.Provider>
  );
}

export default SoundProvider;
