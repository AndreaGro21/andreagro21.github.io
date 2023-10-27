import React, { useState, useEffect } from 'react';

const MouseTrail = () => {
  
  const [trail, setTrail] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const addTrail = (x, y) => {
    setTrail([...trail, { x, y }]);
  };

  useEffect(() => {
    const onMouseMove = (e) => {
      addTrail(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', onMouseMove);

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <div>
      {screenWidth > 800 ? (
        trail.map((pos, index) => (
          <div
            className="trail"
            key={index}
            style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
          />
        ))
      ) : (
        <div className="normal-mouse" />
      )}
    </div>
  );
};

export default MouseTrail;