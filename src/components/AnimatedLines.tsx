import React from 'react';

const AnimatedLines: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className={`
            absolute h-px w-32 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent
            animate-line-float-${i + 1}
          `}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedLines;