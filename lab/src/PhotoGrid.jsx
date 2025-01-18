import React from 'react';
import './PhotoGrid.css';
// Import images
import img1 from './assets/us/grid/1.jpg';
import img2 from './assets/us/grid/2.jpg';
import img3 from './assets/us/grid/3.jpg';
import img4 from './assets/us/grid/4.jpg';
import img5 from './assets/us/grid/5.jpg';
import img6 from './assets/us/grid/6.jpg';
import img7 from './assets/us/grid/7.jpg';
import img8 from './assets/us/grid/8.jpg';
import img9 from './assets/us/grid/9.jpg';
import img10 from './assets/us/grid/10.jpg';

const photos = [
  {
    img: img1,
    message: "This is out first Date bum bum, diri jud ta nag sugud tanan atong kalipay"
  },
  {
    img: img2,
    message: "And this is your birthday although late nani siya na celeb, but grabe atong connection ani bumbum"
  },
  {
    img: img3,
    message: "And this is the first time nato nag laag with bleng, cute kaayo ta. Nya siya nakabuking na nag balik ta HAHAHAH grabe atong lingaw ani"
  },
  {
    img: img4,
    message: "And this is the first time pizza together nabilin pajud akong wallet tangaa HAHAHHA cute kaayo ta bum bumm"
  },
  {
    img: img5,
    message: "First time nato mag BLK 9 grabe sab atong libak ani bum bumm LAMI JUD ANG PAGKAON WITH YOU"
  },
  {
    img: img6,
    message: "This is my most favorite day with you bum bum, mura jud tag nag prenup ani pakasal nata bumm"
  },
  {
    img: img7,
    message: "Atong pinaka nindot nato na silhouette, grabe nato tiktok ani bum bumm very cute kaay taa bum bumm "
  },
  {
    img: img8,
    message: "This is our Cutest Picture of all time atong apingg dakoo lami kumotonn bumbumm lami kiss "
  },
  {
    img: img9,
    message: "The first Christmas natoo langga, I love you Super. And also the Showing sa Capitol. heheheh first time nato"
  },
  {
    img: img10,
    message: "Every step sa enrollment kay ang favorite nako kay kauban ka hehehe. And this is our latest laag, this 2025. As i said bum bum lami ang pagkaon with you i love you so much"
  }
];

const PhotoGrid = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="photo-grid-container">
      <div className="grid-header">
        <h1 className="grid-title">
          ✨ My Top 10 Favorite Pictures of Atong Paguban ✨
        </h1>
        <p className="grid-subtitle">
          💝 Click every Picture to see our sweet memories 💝
        </p>
      </div>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div key={index} className="photo-item">
            <div className="photo-card">
              <img src={photo.img} alt={`Memory ${index + 1}`} />
              <div className="message-overlay">
                <p>{photo.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="back-button" onClick={onClose}>
        ❤️ Back to Our Cake ❤️
      </button>
    </div>
  );
};

export default PhotoGrid;
