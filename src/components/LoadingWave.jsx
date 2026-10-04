import React from 'react';

const loaderColors = ['var(--pink)', 'var(--orange)', 'var(--blue)', 'var(--lavender)'];

const LoadingWave = () => {
  return (
    <div className="loading-wave" role="status" aria-label="Loading content">
      {loaderColors.map((color, index) => (
        <span
          key={color}
          className="wave-box"
          style={{
            background: color,
            animationDelay: `${index * 0.15}s`,
          }}
        />
      ))}
    </div>
  );
};

export default LoadingWave;
