import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed z-50 pointer-events-none"
      style={{
        top: cursorPosition.y,
        left: cursorPosition.x,
        // width: '20px',
        // height: '20px',
        // borderRadius: '50%',
        // backgroundColor: 'red',
      }}
    >
        <img src="/assets/pointer.png" alt="" />
    </div>
  );
};

export default CustomCursor;
