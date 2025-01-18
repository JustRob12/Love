import React, { useEffect, useState } from 'react';
import './Fireworks.css';

const Fireworks = ({ isActive }) => {
  const [fireworks, setFireworks] = useState([]);

  useEffect(() => {
    if (isActive) {
      // Create multiple fireworks at random positions
      const newFireworks = Array.from({ length: 5 }, (_, index) => ({
        id: Date.now() + index,
        style: {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`
        }
      }));
      setFireworks(newFireworks);

      // Remove fireworks after animation
      const timer = setTimeout(() => {
        setFireworks([]);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isActive]);

  if (!isActive || fireworks.length === 0) return null;

  return (
    <div className="fireworks">
      {fireworks.map((fw) => (
        <div
          key={fw.id}
          className="firework"
          style={fw.style}
        />
      ))}
    </div>
  );
};

export default Fireworks;
