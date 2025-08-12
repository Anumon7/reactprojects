import React from 'react';
import Navpage from '../pages/navpage';

const NewLayout = ({ children }) => {
  return (
    <div className="layout">
   
      <Navpage />

    
      <main className="main-content">
        {children}
      </main>

    
      <footer className="footer">
        <p>© {new Date().getFullYear()} My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default NewLayout;
