import React from 'react';

const Marquee = ({ children, speed = 20, className = '' }) => {
  const style = { animationDuration: `${speed}s` };
  return (
    <div className={`marquee-container ${className}`}>
      <div className="marquee" style={style} aria-hidden>
        {children}
        &nbsp;&nbsp;&nbsp;
        {children}
      </div>
    </div>
  );
};

export default Marquee;
