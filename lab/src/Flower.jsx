import React, { useEffect } from 'react';
import './Flower.css'; // Import the CSS file

const Flower = () => {
  useEffect(() => {
    const flower = document.querySelector(".flower");

    const petalPartMarkup =
      '<div class="box"><div class="shape"></div></div>';

    const maxParts = 20;
    const maxPetalsDef = 6;
    const maxPetals = maxPetalsDef;

    const partsFontStepDef = 15 / maxParts; // Reduced font size step for smaller flower
    const partsFontStep = partsFontStepDef;
    const huetStep = 150 / maxParts;

    createFlower();

    function createFlower() {
      const angle = 360 / maxPetals;

      for (let i = 0; i < maxPetals; i++) {
        const petal = createPetal();
        const currAngle = angle * i + "deg";
        const transform = `transform: rotateY(${currAngle}) rotateX(-30deg) translateZ(5vmin)`; // Reduced translateZ for smaller size

        petal.setAttribute("style", transform);
        flower.appendChild(petal);
      }
    }

    function createPetal() {
      let box = createBox(null, 0);

      const petal = document.createElement("div");
      petal.classList.add("petal");

      for (let i = 1; i <= maxParts; i++) {
        const newBox = createBox(box, i);
        box = newBox;
      }

      petal.appendChild(box);
      return petal;
    }

    function createBox(box, pos) {
      let fontSize = partsFontStep * (maxParts - pos) + "vmin"; // Adjusted font size for smaller petals
      const half = maxParts / 2;
      let bright = "50";

      if (pos < half + 1) {
        fontSize = partsFontStep * pos + "vmin";
      } else {
        bright = 10 + (40 / half) * (maxParts - pos);
      }

      const color = `hsl(${huetStep * pos}, 100%, ${bright}%)`;

      const newShape = document.createElement("div");
      newShape.classList.add("shape");

      const newBox = document.createElement("div");
      newBox.classList.add("box");
      newBox.setAttribute("style", `color: ${color}; font-size: ${fontSize}`);

      if (box) {
        newBox.appendChild(box);
      }

      newBox.appendChild(newShape);
      return newBox;
    }
  }, []);

  return (
    <div className="wrapper">
      <div className="flower"></div>
      {/* Message below the flower */}
      <div className="message">
        <h2>Happy Girlfriends Day Bum Bum</h2>
    
      </div>
    </div>
  );
};

export default Flower;
