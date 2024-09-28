import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import './Flower.css'; // Keep the CSS in an external file

const Flower = () => {
  const segmRRefs = useRef([]);
  const segmLRefs = useRef([]);
  const ringRefs = useRef([]);

  useEffect(() => {
    // Apply rotation and transformOrigin to .segmR and .segmL
    segmRRefs.current.forEach((segm, i) => {
      const deg = 30 * i;
      segm.style.transform = `rotate(${deg}deg)`;
      segm.style.transformOrigin = 'bottom left';
    });

    segmLRefs.current.forEach((segm, i) => {
      const deg = -30 * (i + 1);
      segm.style.transform = `rotate(${deg}deg)`;
      segm.style.transformOrigin = 'bottom left';
    });

    // Apply size to .ring
    ringRefs.current.forEach((ring, i) => {
      ring.style.width = `${200 - 50 * i}px`;
      ring.style.height = `${40 - 10 * i}px`;
      ring.style.margin = `${10 - 10 * i}px`;
    });

    // GSAP Animations
    const tl1 = gsap.timeline({
      repeat: -1,
      yoyo: true,
    });

    const tl2 = gsap.timeline({
      repeat: -1,
      yoyo: true,
    });

    tl1
      .to('.segmR', {
        scale: 0.5,
        rotate: 0,
        mixBlendMode: 'darken',
        duration: 4,
        ease: 'sine.inOut',
      })
      .to(
        '.corolla',
        {
          xPercent: -49,
          yPercent: 49,
          duration: 4,
          ease: 'sine.inOut',
        },
        '<'
      );

    tl2
      .to('.segmL', {
        scale: 0.5,
        rotate: 0,
        mixBlendMode: 'darken',
        duration: 4,
        ease: 'sine.inOut',
      })
      .to(
        '.corolla',
        {
          xPercent: -49,
          yPercent: 49,
          duration: 4,
          ease: 'sine.inOut',
        },
        '<'
      );
  }, []);

  return (
    <main>
      <div className="corolla">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div
              key={`segmR-${i}`}
              ref={(el) => (segmRRefs.current[i] = el)}
              className="segmR"
            ></div>
          ))}
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <div
              key={`segmL-${i}`}
              ref={(el) => (segmLRefs.current[i] = el)}
              className="segmL"
            ></div>
          ))}
      </div>
      <div className="rings">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <div
              key={`ring-${i}`}
              ref={(el) => (ringRefs.current[i] = el)}
              className="ring"
            ></div>
          ))}
      </div>

      {/* Add the text here */}
      <div className="message">
        I Love You Always, in All Ways Bum Bum
      </div>
    </main>
  );
};

export default Flower;
