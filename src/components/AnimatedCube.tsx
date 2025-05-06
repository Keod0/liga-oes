import React from 'react';

const AnimatedCube: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute w-64 h-64 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-full h-full transform-style-3d animate-float">
          <div className="absolute w-full h-full bg-purple-500/10 dark:bg-purple-500/20 transform -translate-z-32 rotate-cube" />
          <div className="absolute w-full h-full bg-pink-500/10 dark:bg-pink-500/20 transform translate-z-32 rotate-cube" />
          <div className="absolute w-full h-full bg-blue-500/10 dark:bg-blue-500/20 transform -translate-y-32 rotate-x-90 rotate-cube" />
          <div className="absolute w-full h-full bg-indigo-500/10 dark:bg-indigo-500/20 transform translate-y-32 rotate-x-90 rotate-cube" />
          <div className="absolute w-full h-full bg-violet-500/10 dark:bg-violet-500/20 transform -translate-x-32 rotate-y-90 rotate-cube" />
          <div className="absolute w-full h-full bg-fuchsia-500/10 dark:bg-fuchsia-500/20 transform translate-x-32 rotate-y-90 rotate-cube" />
        </div>
      </div>
    </div>
  );
};

export default AnimatedCube;