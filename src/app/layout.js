import React from 'react';

import './styles.css';

function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        {children}
        <footer>Page renewed on: {new Date().toLocaleString()}</footer>
      </body>
    </html>
  );
}

export default RootLayout;
