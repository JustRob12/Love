import { gsap } from 'gsap';
import React, { useEffect } from 'react';
import './Flower.css'; // Import the CSS file

const Flower = () => {
  useEffect(() => {
    const segmR = Array.from(document.getElementsByClassName("segmR"));
    segmR.forEach((segm, i) => {
      let deg = 30 * i;
      segm.style.transform = "rotate(" + deg + "deg)";
      segm.style.transformOrigin = "bottom left";
    });

    const segmL = Array.from(document.getElementsByClassName("segmL"));
    segmL.forEach((segm, i) => {
      let deg = -30 * (i + 1);
      segm.style.transform = "rotate(" + deg + "deg)";
      segm.style.transformOrigin = "bottom left";
    });

    const rings = Array.from(document.getElementsByClassName("ring"));
    rings.forEach((ring, i) => {
      ring.style.width = 200 - 50 * i + "px";
      ring.style.height = 40 - 10 * i + "px";
      ring.style.margin = 10 - 10 * i + "px";
    });

    const tl1 = gsap.timeline({
      repeat: -1,
      yoyo: true,
    });

    const tl2 = gsap.timeline({
      repeat: -1,
      yoyo: true,
    });

    tl1
      .to(".segmR", {
        scale: 0.5,
        rotate: 0,
        mixBlendMode: "darken",
        duration: 4,
        ease: "sine.inOut",
      })
      .to(
        ".corolla",
        {
          xPercent: -49,
          yPercent: 49,
          duration: 4,
          ease: "sine.inOut",
        },
        "<"
      );

    tl2
      .to(".segmL", {
        scale: 0.5,
        rotate: 0,
        mixBlendMode: "darken",
        duration: 4,
        ease: "sine.inOut",
      })
      .to(
        ".corolla",
        {
          xPercent: -49,
          yPercent: 49,
          duration: 4,
          ease: "sine.inOut",
        },
        "<"
      );
  }, []);

  return (
    <main>
      <div className="corolla">
        <div className="segmL"></div>
        <div className="segmR"></div>
        <div className="segmR"></div>
        <div className="segmR"></div>
        <div className="segmR"></div>
        <div className="segmL"></div>
        <div className="segmL"></div>
      </div>
      <div className="rings">
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="ring"></div>
      </div>
      {/* Message below the lines */}
      <p className="flower-message">Goodluck Bumbum.<br />I Love You Always, In All Ways.</p>
    </main>
  );
};

export default Flower;  
