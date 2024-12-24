import React, { useState } from 'react';
import './Flower.css';

const Flower = () => {
  const [showLoveMessage, setShowLoveMessage] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const handleBoxClick = () => {
    setShowButton(true);
  };

  const handleLoveClick = () => {
    setShowLoveMessage(true);
  };

  return (
    <div className='fullGroup' onClick={handleBoxClick}>
      <div className='boxGroup'>
        <div className='boxFace face1'></div>
        <div className='boxFace face1 in1'></div>
        <div className='boxFace face2 in2'></div>
        <div className='boxFace face2'></div>
        <div className='boxFace face3'></div>
        <div className='boxFace face3 in3'></div>
        <div className='boxFace face4'></div>
        <div className='boxFace face4 in4'></div>
        <div className='boxFace face5'></div>
        <div className='boxFace face5 in5'></div>
        <div className='treeGroup'>
          <div className='topStarGroup'>
            <div className='topStarCorner' style={{"--angle":"0deg"}}></div>
            <div className='topStarCorner' style={{"--angle":"70deg"}}></div>
            <div className='topStarCorner' style={{"--angle":"140deg"}}></div>
            <div className='topStarCorner' style={{"--angle":"220deg"}}></div>
            <div className='topStarCorner' style={{"--angle":"290deg"}}></div>
          </div>
          <div className='trunk'></div>
          <div className='leaveGroup' style={{"--up":"1"}}>
            <div className='leave' style={{"--scale":"1"}}></div>
          </div>
          <div className='leaveGroup' style={{"--up":"2"}}>
            <div className='leave' style={{"--scale":"0.85"}}></div>
          </div>
          <div className='leaveGroup' style={{"--up":"3"}}>
            <div className='leave' style={{"--scale":"0.7"}}></div>
          </div>
          <div className='ballGroup'>
            <div className='ball ball1'></div>
            <div className='ball ball2'></div>
            <div className='ball ball3'></div>
            <div className='ball ball4'></div>
            <div className='ball ball5'></div>
            <div className='ball ball6'></div>
            <div className='ball ball7'></div>
          </div>
        </div>
      </div>
      <div className='starGroup'>
        <div className='star star1'></div>
        <div className='star star2'></div>
        <div className='star star3'></div>
        <div className='star star4'></div>
        <div className='star star5'></div>
        <div className='star star6'></div>
        <div className='star star7'></div>
      </div>
      <div className='text text1'> Click Me </div>
      <div className='text text2'> Merry Christmas! </div>
      <div className='text text3'> I love you Bum bum ❤️ </div>
      
      {showButton && (
        <button className="love-button" onClick={(e) => {
          e.stopPropagation();
          handleLoveClick();
        }}>
          Click for a special message ❤️
        </button>
      )}
      
      {showLoveMessage && (
        <div className="love-message">
          My dearest Bum Bummm,
          <br /><br />
          As we celebrate this magical Christmas together, I want you to know that you are the greatest gift I could ever ask for bum bum. 
          <br /><br />
          You make my heart smile, and I cherish every second we spend together. You're my best friend, my soulmate, and my everything.
          <br /><br />
          Kabalo ko na Pabadlong ko palangga, and im very sorry tanan sa nabuhat nako na mali karong tuiga, maningkamot ko to be your best MAN. Handtud-hantud nani langga. Ikaw lang jud ako, wala nay lain. Ikaw ang GIFT sa ako sa GINOO
          <br /><br />
          I will be your forever Bum Bum. I will always be your Bum Bum. We will do our best to be together forever. Naa na sa imo ang tanan tanan pa. Di najud taka buy-an palangga. Ikaw and the best sa akoo and ako ang the best sa imooooo. I will be always by your side bum bum no matter what happens
          <br /><br />
          Merry Christmas, My Pretty Bum Bum!
          
          <br />
          Forever yours Roberto M. Prisoris Jr.
          <br /><br />
          I Love You Always, In All Ways❤️
        </div>
      )}
    </div>
  );
};

export default Flower;
