import React, { useState, useEffect } from 'react';
import './Cake.css';
import PhotoGrid from './PhotoGrid';
import Fireworks from './Fireworks';
// Import all images
import img1 from './assets/us/1.jpg';
import img2 from './assets/us/2.jpg';
import img3 from './assets/us/3.jpg';
import img4 from './assets/us/4.jpg';
import img5 from './assets/us/5.jpg';
import img6 from './assets/us/6.jpg';
import img7 from './assets/us/7.jpg';
import img8 from './assets/us/8.jpg';
import img9 from './assets/us/9.jpg';
import img10 from './assets/us/10.jpg';

const Cake = () => {
  const [floatingImages, setFloatingImages] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showGrid, setShowGrid] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);

  // Array of imported images
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  // Function to create a new floating image
  const createFloatingImage = (imageIndex) => {
    const positions = {
      left: Math.random() * (window.innerWidth - 300),
      bottom: -100, // Start from below the screen
    };
    
    const newImage = {
      id: Date.now(),
      src: images[imageIndex],
      style: {
        left: positions.left + 'px',
        bottom: positions.bottom + 'px',
        transform: `rotate(${Math.random() * 40 - 20}deg)`,
        '--rotation': `${Math.random() * 90 - 45}deg`,
        '--float-distance': `${100 + Math.random() * 50}vh`, // Float upward distance
        '--float-direction': `${Math.random() * 200 - 100}px`, // Horizontal drift
      }
    };

    setFloatingImages(prev => [...prev, newImage]);

    // Remove the image after animation and show next image
    setTimeout(() => {
      setFloatingImages(prev => prev.filter(img => img.id !== newImage.id));
      
      // Show next image if not at the end
      if (imageIndex < images.length - 1) {
        setTimeout(() => {
          setCurrentImageIndex(prev => prev + 1);
          createFloatingImage(imageIndex + 1);
        }, 500); // Small delay before next image
      } else {
        // Reset after all images are shown
        setIsAnimating(false);
        setCurrentImageIndex(0);
      }
    }, 4000); // Duration matches CSS animation
  };

  const handleClick = () => {
    if (!isAnimating) {
      const cake = document.getElementById('cake');
      cake.classList.toggle('blow');
      setIsAnimating(true);
      setCurrentImageIndex(0);
      createFloatingImage(0); // Start with first image
      
      // Trigger fireworks
      setShowFireworks(true);
      setTimeout(() => setShowFireworks(false), 2000);
    }
  };

  return (
    <div className="cake-container">
      <Fireworks isActive={showFireworks} />
      <div className="note">
        <span className="note-text">✨ Click the cake for a surprise! ✨</span>
      </div>
      <div className="cake" id="cake" onClick={handleClick}>
        <div className="smoke"></div>
        <div className="candle"></div>
        <div className="top-layer"></div>
        <div className="bottom-layer"></div>
      </div>
      <div className="monthsary-text">
        Happy 1st Monthsary Bum Bum ❤️
      </div>
      <h1 className="title">I love You Always, In All Ways</h1>
      <button className="view-memories-btn" onClick={() => setShowGrid(true)}>
        View Our Memories 💝
      </button>
      {floatingImages.map(image => (
        <img
          key={image.id}
          src={image.src}
          alt="floating"
          className="floating-image"
          style={image.style}
        />
      ))}
      <PhotoGrid isVisible={showGrid} onClose={() => setShowGrid(false)} />
    </div>
  );
};

export default Cake;
