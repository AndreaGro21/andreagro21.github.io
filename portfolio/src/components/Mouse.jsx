import React, { useState, useEffect } from 'react';


const MouseTrail = () => {
  const [trail, setTrail] = useState([]);

  const addTrail = (x, y) => {
    setTrail([...trail, { x, y }]);
  };

  useEffect(() => {
    const onMouseMove = (e) => {
      addTrail(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, );

  return (
    <div>
      {trail.map((pos, index) => (
        <div
          className="trail" // Usa la classe CSS definita nel file CSS
          key={index}
          style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
        />
      ))}
    </div>
  );
};

export default MouseTrail;
